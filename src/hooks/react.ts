import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import {
  type BtcWalletConnectOptions,
  Balance,
  BtcWalletNetwork,
  BtcConnectorId,
} from '../types';

import BtcWalletConnect, { Connector } from '../connect';
declare global {
  interface Window {
    btcWallet: any;
  }
}

export type WalletState = {
  btcWallet?: BtcWalletConnect;
  balance: Balance;
  publicKey: string;
  address: string;
  connected: boolean;
  initStatus: boolean;
  modalVisible: boolean;
  network: BtcWalletNetwork;
  connectorId?: BtcConnectorId;
  localConnectorId?: BtcConnectorId;
  connector?: Connector;
  connectors?: {
    id: BtcConnectorId;
    name: string;
    logo: string;
    connector: any;
    installed: boolean;
  }[];
};

export type WalletActions = {
  init: (config: BtcWalletConnectOptions) => void;
  check: () => void;
  connect: () => void;
  disconnect: () => void;
  switchConnector: (id: BtcConnectorId) => void;
  switchNetwork: () => void;
  setModalVisible: (visible: boolean) => void;
};

export type WalletStore = WalletState & WalletActions;

const defaultInitState: WalletState = {
  initStatus: false,
  modalVisible: false,
  balance: { confirmed: 0, unconfirmed: 0, total: 0 },
  connectors: [],
  publicKey: '',
  address: '',
  connected: false,
  network: undefined,
};

export const useReactWalletStore = create<WalletStore>()(
  devtools((set, get) => ({
    ...defaultInitState,
    setModalVisible: (visible: boolean) => {
      set(() => ({ modalVisible: visible }));
    },
    init: (config: BtcWalletConnectOptions = {}) => {
      try {
        const { network = 'mainnet', defaultConnectorId = 'sat20' } = config;
        const btcWallet = new BtcWalletConnect(config);
        window.btcWallet = btcWallet;
        set(() => ({
          btcWallet,
          network,
          connectorId: defaultConnectorId,
          connector: btcWallet.connector,
          localConnectorId: btcWallet.localConnectorId,
          connectors: btcWallet.connectors.map((con) => ({
            id: con.id as any,
            name: con.instance.name,
            logo: con.instance.logo,
            connector: con.instance,
            installed: con.installed,
          })),
          initStatus: true,
        }));
      } catch (error) {
        console.error('Error initializing Wallet', error);
        set(() => ({ initStatus: false }));
        throw error;
      }
    },
    switchConnector(id: BtcConnectorId) {
      const btcWallet = get().btcWallet;
      if (!btcWallet) {
        throw new Error('Wallet not initialized');
      }
      btcWallet.switchConnector(id);
      set(() => ({
        connectorId: id,
        connector: btcWallet.connector,
        localConnectorId: btcWallet.localConnectorId,
      }));
    },
    check: async () => {
      try {
        const btcWallet = get().btcWallet;
        if (!btcWallet) {
          throw new Error('Wallet not initialized');
        }
        await btcWallet.check();
        const address = btcWallet.address;
        const publicKey = btcWallet.publicKey;
        const balance = btcWallet.balance;
        const connected = btcWallet.connected;
        const network = btcWallet.network;
        const localConnectorId = btcWallet.localConnectorId;
        set((state) => ({
          publicKey,
          address,
          balance,
          connected,
          network,
          localConnectorId,
        }));
      } catch (error) {
        throw error;
      }
    },
    connect: async () => {
      try {
        const btcWallet = get().btcWallet;
        if (!btcWallet) {
          throw new Error('Wallet not initialized');
        }
        await btcWallet.connect();
        const address = btcWallet.address;
        const publicKey = btcWallet.publicKey;
        const balance = btcWallet.balance;
        const connected = btcWallet.connected;
        const network = btcWallet.network;
        const localConnectorId = btcWallet.localConnectorId;
        set((state) => ({
          publicKey,
          address,
          balance,
          connected,
          network,
          localConnectorId,
        }));
      } catch (error) {
        console.error('Error connecting Wallet', error);
        throw error;
      }
    },
    disconnect: async () => {
      const { btcWallet } = get();
      if (!btcWallet) {
        throw new Error('Wallet not initialized');
      }
      await btcWallet.disconnect();
      set((state) => ({
        balance: { confirmed: 0, unconfirmed: 0, total: 0 },
        connectorId: undefined,
        publicKey: '',
        address: '',
        initStatus: false,
        connected: false,
        network: 'mainnet',
      }));
    },

    switchNetwork: async () => {
      try {
        const btcWallet = get().btcWallet;
        if (!btcWallet) {
          throw new Error('Wallet not initialized');
        }
        const network = get().network === 'testnet' ? 'mainnet' : 'testnet';
        await btcWallet.switchNetwork(network as any);
        const newNetwork = await btcWallet.getNetwork();
        const address = btcWallet.address;
        const publicKey = btcWallet.publicKey;
        const balance = btcWallet.balance;
        const connected = btcWallet.connected;
        const localConnectorId = btcWallet.localConnectorId;
        set((state) => ({
          publicKey,
          address,
          balance,
          connected,
          localConnectorId,
          network: newNetwork,
        }));
      } catch (error) {
        throw error;
      }
    },
  })),
);
