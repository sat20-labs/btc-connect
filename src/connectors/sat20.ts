import { sat20Logo } from '../assets';
import { WalletNetwork, Balance, BtcWalletNetwork } from '../types';
import { BtcConnector } from './base';

export namespace Sat20WalletTypes {
  export type AccountsChangedEvent = (
    event: 'accountsChanged' | 'networkChanged' | 'environmentChanged',
    handler: (accounts: Array<string> | string) => void,
  ) => void;

  export type Inscription = {
    inscriptionId: string;
    inscriptionNumber: string;
    address: string;
    outputValue: string;
    content: string;
    contentLength: string;
    contentType: string;
    preview: string;
    timestamp: number;
    offset: number;
    genesisTransaction: string;
    location: string;
  };

  export type GetInscriptionsResult = { total: number; list: Inscription[] };

  export type SendInscriptionsResult = { txid: string };

  export type Network = 'mainnet' | 'testnet';
}
export type SAT20 = {
  requestAccounts: () => Promise<string[]>;
  getAccounts: () => Promise<string[]>;
  on: Sat20WalletTypes.AccountsChangedEvent;
  removeListener: Sat20WalletTypes.AccountsChangedEvent;
  getInscriptions: (
    cursor: number,
    size: number,
  ) => Promise<Sat20WalletTypes.GetInscriptionsResult>;
  sendInscription: (
    address: string,
    inscriptionId: string,
    options?: { feeRate: number },
  ) => Promise<Sat20WalletTypes.SendInscriptionsResult>;
  switchNetwork: (network: BtcWalletNetwork) => Promise<void>;
  getNetwork: () => Promise<Sat20WalletTypes.Network>;
  getPublicKey: () => Promise<string>;
  getBalance: () => Promise<Balance>;
  sendBitcoin: (
    address: string,
    atomicAmount: number,
    options?: { feeRate: number },
  ) => Promise<string>;
  pushTx: ({ rawtx }: { rawtx: string }) => Promise<string>;
  pushPsbt: (psbtHex: string) => Promise<string>;
  signMessage: (
    message: string,
    type?: 'ecdsa' | 'bip322-simple',
  ) => Promise<string>;
  signPsbt: (
    psbtHex: string,
    options?: {
      autoFinalized?: boolean;
      toSignInputs: {
        index: number;
        address?: string;
        publicKey?: string;
        sighashTypes?: number[];
        disableTweakSigner?: boolean;
      }[];
    },
  ) => Promise<string>;

  signPsbts: (
    psbtHexs: string[],
    options?: {
      autoFinalized?: boolean;
      toSignInputs: {
        index: number;
        address?: string;
        publicKey?: string;
        sighashTypes?: number[];
        disableTweakSigner?: boolean;
      };
    }[],
  ) => Promise<string[]>;
  addAccounts: (count: number) => Promise<void>;
};

declare global {
  interface Window {
    sat20: SAT20;
  }
}

export class Sat20Connector extends BtcConnector {
  readonly id = 'sat20';
  readonly name: string = 'SAT20';
  readonly logo: string = sat20Logo;
  readonly networks: WalletNetwork[] = ['mainnet', 'testnet'];
  public homepage = 'https://sat20.org';
  public banance: Balance = { confirmed: 0, unconfirmed: 0, total: 0 };
  

  constructor(network: WalletNetwork) {
    super(network);
  }
  get wallet(): SAT20 {
    return window.sat20;
  }

  get installed(): boolean {
    return !!window.sat20;
  }

  on(event: 'accountsChanged' | 'networkChanged' | 'environmentChanged', handler: any) {
    if (!this.wallet) {
      throw new Error('SAT20 not installed');
    }
    this.wallet.on(event, handler);
  }
  removeListener(event: 'accountsChanged' | 'networkChanged' | 'environmentChanged', handler: any) {
    if (!this.wallet) {
      throw new Error('SAT20 not installed');
    }

    this.wallet.removeListener(event, handler);
  }
  async connect(): Promise<boolean> {
    this.connected = false;
    try {
      if (!this.wallet) {
        throw new Error('SAT20 not installed');
      }
      await this.requestAccounts();
      await this.getCurrentInfo();
      this.connected = true;
      return true;
    } catch (error) {
      throw error;
    }
  }
  async requestAccounts() {
    if (!this.wallet) {
      throw new Error('SAT20 not installed');
    }
    return this.wallet.requestAccounts();
  }
  async getCurrentInfo() {
    if (!this.wallet) {
      throw new Error('SAT20 not installed');
    }
    const accounts = await this.wallet.getAccounts();
    if (accounts.length) {
      this.address = accounts[0];
      const [publicKey, network, banance] = await Promise.all([
        this.wallet.getPublicKey(),
        this.wallet.getNetwork(),
        this.wallet.getBalance(),
      ]);
      this.publicKey = publicKey;
      this.network = network;
      this.banance = banance;
      this.connected = true;
    }
  }
  async disconnect(): Promise<void> {
    this.address = undefined;
    this.publicKey = undefined;
    this.connected = false;
    this.banance = { confirmed: 0, unconfirmed: 0, total: 0 };
  }
  async getAccounts(): Promise<string[]> {
    if (!this.wallet) {
      throw new Error('SAT20 not installed');
    }
    return this.wallet.getAccounts();
  }
  async sendToAddress(toAddress: string, amount: number) {
    if (!this.wallet) {
      throw new Error('SAT20 not installed');
    }
    return this.wallet?.sendBitcoin(toAddress, amount);
  }

  async switchNetwork(network: WalletNetwork) {
    if (!this.wallet) {
      throw new Error('SAT20 not installed');
    }
    await this.wallet.switchNetwork(network);
  }

  async getPublicKey() {
    if (!this.wallet) {
      throw new Error('SAT20 not installed');
    }
    return this.wallet.getPublicKey();
  }

  async getBalance() {
    if (!this.wallet) {
      throw new Error('SAT20 not installed');
    }
    return this.wallet.getBalance();
  }
  async signPsbt(psbtHex: string, options?: any) {
    if (!this.wallet) {
      throw new Error('SAT20 not installed');
    }
    return this.wallet.signPsbt(psbtHex, options);
  }
  async signMessage(message: string) {
    if (!this.wallet) {
      throw new Error('SAT20 not installed');
    }
    return this.wallet.signMessage(message);
  }
  async signPsbts(psbtHexs: string[], options?: any) {
    if (!this.wallet) {
      throw new Error('SAT20 not installed');
    }
    return this.wallet.signPsbts(psbtHexs, options);
  }
  async pushTx(rawTx: string) {
    if (!this.wallet) {
      throw new Error('SAT20 not installed');
    }
    return this.wallet.pushTx({ rawtx: rawTx });
  }
  async pushPsbt(psbtHex: string) {
    if (!this.wallet) {
      throw new Error('SAT20 not installed');
    }
    return this.wallet.pushPsbt(psbtHex);
  }

  async addAccounts(count: number) {
    if (!this.wallet) {
      throw new Error('SAT20 not installed');
    }
    return this.wallet.addAccounts(count);
  }
}
