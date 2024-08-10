export interface BtcWalletConnectOptions {
  network?: BtcWalletNetwork;
  defaultConnectorId?: BtcConnectorId;
}
export type BtcWalletNetwork = 'mainnet' | 'testnet' | undefined;
export type BtcConnectorId = 'sat20' | 'unisat' | 'okx';

export type AccountsChangedEvent = (
  event: 'accountsChanged',
  handler: (accounts: Array<string>) => void
) => void;
export type AccountChangedEvent = (
  event: 'accountChanged',
  handler: (account: any) => void
) => void;

export type NetworkChangedEvent = (
  event: 'networkChanged',
  handler: (network: BtcWalletNetwork) => void
) => void;

export type MessageType = 'ecdsa' | 'bip322-simple';

