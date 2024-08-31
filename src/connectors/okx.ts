import { WalletNetwork, Balance } from '../types';
import { BtcConnector } from './base';
import { okxLogo } from '../assets';
export namespace OkxWalletTypes {
  export interface AddressInfo {
    address: string;
    publicKey: string;
    compressedPublicKey: string;
  }
  export type OnEvent = (
    event: 'accountsChanged' | 'accountChanged',
    handler: (accounts: Array<string> | Array<AddressInfo>) => void,
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

  export type Network = 'mainnet' | 'testnet';

  export interface ConnectResult {
    address: string;
    publicKey: string;
  }
  export interface SendProps {
    from: string;
    to: string;
    value: number;
    satBytes: number;
  }
  export interface SendResult {
    txhash: string;
  }

  export interface TransferNftProps {
    from: string;
    to: string;
    data: string | string[];
  }
  export interface TransferNftResult {
    txhash: string;
  }
  export interface SplitUtxoProps {
    from: string;
    amount: number;
  }
  export interface SplitUtxoResult {
    utxos: {
      txId: string;
      vOut: number;
      amount: number;
      rawTransaction: string;
    }[];
  }

  export interface InscribeProps {
    type: 51 | 58;
    from: string;
    tick: string;
    tid: string;
  }
  export interface MintProps {
    type: 60 | 50 | 51 | 62 | 61 | 36 | 33 | 34 | 35 | 58;
    from: string;
    inscriptions: {
      contentType: string;
      body: string;
    }[];
  }
  export interface MintResult {
    commitAddrs: string[];
    commitTx: string;
    revealTxs: string[];
    commitTxFee: number;
    revealTxFees: number[];
    feeRate: number;
    size: number;
  }
}
export type OkxWallet = {
  connect: () => Promise<OkxWalletTypes.ConnectResult>;
  requestAccounts: () => Promise<string[]>;
  getAccounts: () => Promise<string[]>;
  switchNetwork: (network: 'mainnet' | 'testnet') => Promise<void>;
  getNetwork: () => Promise<OkxWalletTypes.Network>;
  getPublicKey: () => Promise<string>;
  getBalance: () => Promise<Balance>;
  getInscriptions: (
    cursor: number,
    size: number,
  ) => Promise<OkxWalletTypes.GetInscriptionsResult>;
  sendBitcoin: (
    toAddress: string,
    satoshis: number,
    options?: {
      feeRate: number;
    },
  ) => Promise<string>;
  sendInscription: (
    address: string,
    inscriptionId: string,
    options?: { feeRate: number },
  ) => Promise<string>;
  transferNft: ({
    from,
    to,
    data,
  }: OkxWalletTypes.TransferNftProps) => Promise<OkxWalletTypes.TransferNftResult>;
  send: ({
    from,
    to,
    value,
    satBytes,
  }: OkxWalletTypes.SendProps) => Promise<OkxWalletTypes.SendResult>;
  signMessage: (
    message: string,
    type?: 'ecdsa' | 'bip322-simple',
  ) => Promise<string>;
  pushTx: (rawtx: string) => Promise<string>;
  splitUtxo: ({
    from,
    amount,
  }: OkxWalletTypes.SplitUtxoProps) => Promise<OkxWalletTypes.SplitUtxoResult>;
  inscribe: ({
    type,
    from,
    tick,
    tid,
  }: OkxWalletTypes.InscribeProps) => Promise<string>;
  mint: ({
    type,
    from,
    inscriptions,
  }: OkxWalletTypes.MintProps) => Promise<OkxWalletTypes.MintResult>;
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
  pushPsbt: (psbtHex: string) => Promise<string>;
  on: OkxWalletTypes.OnEvent;
};

export interface OkxTestnetWallet {
  connect: () => Promise<OkxWalletTypes.ConnectResult>;
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
}

declare global {
  interface Window {
    okxwallet: {
      bitcoin: OkxWallet;
      bitcoinTestnet: OkxWallet;
    };
  }
}

export class OkxConnector extends BtcConnector {
  readonly id = 'okx';
  readonly name: string = 'OKX';
  readonly logo: string = okxLogo;
  readonly networks: WalletNetwork[] = ['mainnet'];
  public homepage: string =
    'https://www.okx.com/web3/build/docs/sdks/chains/bitcoin/provider';
  public banance: Balance = { confirmed: 0, unconfirmed: 0, total: 0 };

  constructor(network: WalletNetwork) {
    super(network);
    this.network = 'mainnet';
  }

  get wallet(): OkxWallet {
    return window.okxwallet?.bitcoin;
  }

  get installed(): boolean {
    return !!window.okxwallet;
  }

  on(event: 'accountsChanged' | 'accountChanged', handler: any) {
    if (this.network === 'mainnet') {
      this.wallet?.on(event, handler);
    }
  }
  async connect(): Promise<boolean> {
    this.connected = false;
    try {
      if (!this.wallet) {
        throw new Error('OkxWallet not installed');
      }
      const res = await this.wallet.connect();
      this.connected = true;
      this.address = res.address;
      this.publicKey = res.publicKey;
      await this.switchNetwork('mainnet');
      await this.getCurrentInfo();
    } catch (error) {
      throw error;
    }
    return this.connected;
  }
  async getCurrentInfo() {
    if (!this.wallet) {
      throw new Error('OkxWallet not installed');
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
      throw new Error('OkxWallet not installed');
    }
    return this.wallet.getAccounts();
  }
  async getNetwork(): Promise<WalletNetwork> {
    return this.network;
  }
  async getPublicKey() {
    if (!this.wallet) {
      throw new Error('OkxWallet not installed');
    }
    return this.wallet.getPublicKey();
  }
  async getBalance() {
    if (!this.wallet) {
      throw new Error('OkxWallet not installed');
    }
    return this.wallet.getBalance();
  }

  async sendToAddress(toAddress: string, amount: number) {
    if (!this.wallet) {
      throw new Error('OkxWallet not installed');
    }
    return this.wallet?.sendBitcoin(toAddress, amount);
  }

  async switchNetwork(network: WalletNetwork) {
    if (!this.wallet) {
      throw new Error('Unisat not installed');
    }
    switch (network) {
      case 'mainnet':
        break;
      case 'testnet':
        throw new Error("no implementation for okx testnet");
    }
    this.network = network;
  }

  async signPsbt(psbtHex: string, options?: any) {
    if (!this.wallet) {
      throw new Error('OkxWallet not installed');
    }
    return this.wallet.signPsbt(psbtHex, options);
  }
  async signMessage(message: string) {
    if (!this.wallet) {
      throw new Error('OkxWallet not installed');
    }
    return this.wallet.signMessage(message);
  }
  async signPsbts(psbtHexs: string[], options?: any) {
    if (!this.wallet) {
      throw new Error('OkxWallet not installed');
    }
    return this.wallet.signPsbts(psbtHexs, options);
  }
  async pushTx(rawTx: string) {
    if (this.network !== 'mainnet') {
      throw new Error("Can't get accounts on testnet");
    }
    if (!this.wallet) {
      throw new Error('OkxWallet not installed');
    }
    return this.wallet.pushTx(rawTx);
  }
  async pushPsbt(psbtHex: string) {
    if (this.network !== 'mainnet') {
      throw new Error("Can't get accounts on testnet");
    }
    if (!this.wallet) {
      throw new Error('OkxWallet not installed');
    }
    return this.wallet.pushPsbt(psbtHex);
  }
}
