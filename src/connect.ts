import { Sat20Connector, UnisatConnector, OkxConnector } from './connectors';
import {
  Balance,
  BtcWalletConnectOptions,
  BtcConnectorId,
  BtcWalletNetwork,
  NetworkChangedEvent,
  AccountsChangedEvent,
  MessageType,
  AccountChangedEvent,
} from './types';

export type Connector = Sat20Connector | UnisatConnector | OkxConnector;

export interface BtcConnectors {
  id: BtcConnectorId;
  instance: Connector;
}

class BtcWalletConnect {
  private local_storage_key = '_btc_connector_id_1';
  private local_disconnect_key = '_btc_disconnect_status_1';
  connectorId?: BtcConnectorId;
  localConnectorId?: BtcConnectorId;
  disConnectStatus: boolean = false;
  connected: boolean = false;
  address?: string;
  publicKey?: string;
  network: BtcWalletNetwork;
  balance: Balance = { confirmed: 0, unconfirmed: 0, total: 0 };
  connectors: BtcConnectors[];
  _connector?: Connector;

  get connector(): Connector | undefined {
    if (!this.connectorId) {
      return;
    }
    return this.connectors.find((c) => c.id === this.connectorId && c.instance.installed)?.instance;
  }

  constructor({
    network = 'mainnet',
  }: BtcWalletConnectOptions) {
    this.network = network;

    // Check if the hostname has three parts and the first part is 'test' or 'dev'
    const needSat20 = (window.location.hostname !== 'ordx.market');

    this.connectors = [
      // {
      //   id: 'sat20',
      //   instance: new Sat20Connector(this.network),
      //   installed: !!window.sat20,
      // },
      {
        id: 'unisat',
        instance: new UnisatConnector(this.network),
      },
      {
        id: 'okx',
        instance: new OkxConnector(this.network),
      },
    ];

    if (needSat20) {
      this.connectors.unshift({
        id: 'sat20',
        instance: new Sat20Connector(this.network),
      });
    }

    this.localConnectorId = (localStorage.getItem(this.local_storage_key) as BtcConnectorId) || undefined;
    this.disConnectStatus = localStorage.getItem(this.local_disconnect_key) == '1';
  }

  switchConnector(id: BtcConnectorId) {
    const _c = this.connectors.find(
      (c) => c.id === id && c.instance.installed,
    )?.instance;
    if (!_c) {
      this.reset();
      console.error('switchConnector: Connector not found: ' + id);
      return;
      // throw new Error('switchConnector: Connector not found');
    }
    this.connectorId = id;
    return _c;
  }
  async connect() {
    if (!this.connector) {
      this.reset();
      console.error('connect: Connector not found');
      return;
      // throw new Error('connect: Connector not found');
    }

    this.connected = await this.connector.connect();
    if (this.connected) {
      this.address = this.connector.address;
      this.publicKey = this.connector.publicKey;
      this.balance = this.connector.banance;
      this.network = this.connector.network;
    }
    localStorage.setItem(this.local_storage_key, this.connectorId || '');
    localStorage.removeItem(this.local_disconnect_key);
    return this.connected;
  }
  private async getCurrentInfo() {
    if (!this.connector) {
      this.reset();
      console.error('getCurrentInfo: Connector not found');
      return;
      // throw new Error('getCurrentInfo: Connector not found');
    }
    try {
      if (this.connector.getCurrentInfo) {
        await this.connector.getCurrentInfo();
        this.address = this.connector.address;
        this.publicKey = this.connector.publicKey;
        this.network = this.connector.network;
        this.balance = this.connector.banance;
        this.connected = this.connector.connected;
      }
    } catch (error) {
      throw error;
    }
  }
  async check() {
    if (this.disConnectStatus) {
      return false;
    }
    this.connectorId = this.localConnectorId || this.connectorId;
    const _c = this.connectors.find(
      (c) => c.id === this.connectorId && c.instance.installed,
    )?.instance;
    if (!_c) {
      this.reset();
      console.error('check: Connector not found');
      return;
      // throw new Error('check: Connector not found');
    }
    try {
      await this.getCurrentInfo();
    } catch (error) {
      console.error(error);
    }
  }
  async disconnect() {
    if (!this.connector) {
      this.reset();
      console.error('disconnect: Connector not found');
      return;
      // throw new Error('disconnect: Connector not found');
    }
    await this.connector.disconnect();
    this.reset();
  }
  async getAccounts() {
    if (!this.connector) {
      this.reset();
      console.error('getAccounts: Connector not found');
      return;
      // throw new Error('getAccounts: Connector not found');
    }
    return this.connector.getAccounts();
  }

  reset() {
    this.connectorId = undefined;
    this.connected = false;
    this.address = undefined;
    this.publicKey = undefined;
    this.balance = { confirmed: 0, unconfirmed: 0, total: 0 };
    localStorage.setItem(this.local_disconnect_key, '1');
  }

  async getNetwork() {
    if (!this.connector) {
      this.reset();
      console.error('getNetwork: Connector not found');
      return;
      // throw new Error('getNetwork: Connector not found');
    }
    return this.connector.network;
  }

  async switchNetwork(network: BtcWalletNetwork) {
    if (!this.connector) {
      this.reset();
      console.error('switchNetwork: Connector not found');
      return;
      // throw new Error('switchNetwork: Connector not found');
    }
    await this.connector.switchNetwork(network);
    this.network = network;
    await this.getCurrentInfo();
  }
  async sendToAddress(toAddress: string, amount: number) {
    if (!this.connector) {
      this.reset();
      console.error('sendToAddress: Connector not found');
      return;
      // throw new Error('sendToAddress: Connector not found');
    }
    if (amount <= 0) {
      console.error('sendToAddress: Invalid amount');
      return;
      // throw new Error('Invalid amount');
    }
    return this.connector.sendToAddress(toAddress, amount);
  }

  async signMessage(message: string, type?: MessageType) {
    if (!this.connector) {
      this.reset();
      console.error('signMessage: Connector not found');
      return;
      // throw new Error('signMessage: Connector not found');
    }
    return this.connector.signMessage(message);
  }
  async signPsbt(psbtHex: string, options?: any) {
    if (!this.connector) {
      this.reset();
      console.error('signPsbt: Connector not found');
      return;
      // throw new Error('signPsbt: Connector not found');
    }
    return this.connector.signPsbt(psbtHex, options);
  }

  async signPsbts(psbtHexs: string[], options?: any) {
    if (!this.connector) {
      this.reset();
      console.error('signPsbts: Connector not found');
      return;
      // throw new Error('signPsbts: Connector not found');
    }
    return this.connector.signPsbts(psbtHexs, options);
  }
  async pushTx(rawTx: string) {
    if (!this.connector) {
      this.reset();
      console.error('pushTx: Connector not found');
      return;
      // throw new Error('pushTx: Connector not found');
    }
    return this.connector.pushTx(rawTx);
  }
  async pushPsbt(psbtHex: string) {
    if (!this.connector) {
      this.reset();
      console.error('pushPsbt: Connector not found');
      return;
      // throw new Error('pushPsbt: Connector not found');
    }
    return this.connector.pushPsbt(psbtHex);
  }
  on(
    event: 'networkChanged' | 'accountsChanged' | 'accountChanged' | 'environmentChanged',
    handler: any,
  ) {
    if (!this.connector) {
      // console.warn('on: Connector not found');
      // this.reset();
      // throw new Error('on: Connector not found');
      return;
    }
    if (this.connector instanceof Sat20Connector) {
      this.connector.on(event as 'networkChanged' | 'accountsChanged' | 'environmentChanged', handler);
    } else if (this.connector instanceof UnisatConnector) {
      this.connector.on(event as 'networkChanged' | 'accountsChanged', handler);
    } else if (this.connector instanceof OkxConnector) {
      this.connector.on(event as 'accountsChanged' | 'accountChanged', handler);
    }
  }

  removeListener(
    event: 'networkChanged' | 'accountsChanged' | 'accountChanged' | 'environmentChanged',
    handler: any,
  ) {
    if (!this.connector) {
      // this.reset();
      // console.warn('removeListener: Connector not found');
      // throw new Error('removeListener: Connector not found');
      return;

    }

    if (this.connector instanceof Sat20Connector) {
      this.connector.removeListener(event as 'networkChanged' | 'accountsChanged' | 'environmentChanged', handler,);
    } else if (this.connector instanceof UnisatConnector) {
      this.connector.removeListener(event as 'networkChanged' | 'accountsChanged', handler,);
    } else if (this.connector instanceof OkxConnector) {
      return;
    }
  }

  addAccounts(count: number) {
    if (!this.connector) {
      console.error('addAccounts: Connector not found');
      this.reset();
      // throw new Error('addAccounts: Connector not found');
      return false;
    }

    if (this.connector instanceof Sat20Connector) {
      this.connector.addAccounts(count);
    } else if (this.connector instanceof UnisatConnector) {
      console.error("no implement");
      return false
    } else if (this.connector instanceof OkxConnector) {
      console.error("no implement");
      return false
    }

  }
}

export default BtcWalletConnect;
