import React, { useMemo } from 'react';
import { useEffect, useState, useRef } from 'react';
import BtcWalletConnect from '../connect';
import { WalletSelectModal } from './WalletSelectModal';
import { hideStr } from '../utils';
import { ExitIcon } from './ExitIcon';
import { useReactWalletStore } from '../hooks';
import { BtcWalletConnectOptions, BtcConnectorId } from '../types/wallet';

export interface WalletConnectReactProps {
  config?: BtcWalletConnectOptions;
  theme?: 'light' | 'dark';
  isSwitchNetwork?: boolean;
  ui?: {
    connectClass?: string;
    disconnectClass?: string;
    modalClass?: string;
    modalZIndex?: number;
  };
  text?: {
    connectText?: string;
    disconnectText?: string;
    modalTitle?: string;
  };
  onConnectSuccess?: (btcWallet: BtcWalletConnect) => void;
  onConnectError?: (error: any) => void;
  onDisconnectSuccess?: () => void;
  onDisconnectError?: (error: any) => void;
  children?: any;
}

export const WalletConnectReact = ({
  config: { network = 'mainnet', defaultConnectorId = 'unisat' } = {},
  theme = 'dark',
  isSwitchNetwork = false,
  ui: {
    connectClass = '',
    disconnectClass = '',
    modalClass = '',
    modalZIndex = 100,
  } = {},
  text: {
    connectText = 'Connect',
    disconnectText = 'Disconnect',
    modalTitle = 'Select Wallet',
  } = {},
  onConnectSuccess,
  onConnectError,
  onDisconnectSuccess,
  onDisconnectError,

  children,
}: WalletConnectReactProps) => {
  const {
    connect,
    modalVisible,
    setModalVisible,
    connectors,
    connected,
    address,
    init,
    disconnect,
    initStatus,
    btcWallet,
    switchNetwork,
    switchConnector,
  } = useReactWalletStore((state) => state);

  const handleConnect = () => {
    setModalVisible(true);
  };

  const walletSelect = async (id: BtcConnectorId) => {
    switchConnector(id);
    try {
      if (isSwitchNetwork) {
        await btcWallet?.switchNetwork(network);
      }
      connect();
      btcWallet && onConnectSuccess?.(btcWallet);
    } catch (error) {
      onConnectError?.(error);
    } finally {
      setModalVisible(false);
    }
  };
  const handlerDisconnect = async () => {
    try {
      onDisconnectSuccess?.();
      disconnect();
    } catch (error) {
      onDisconnectError?.(error);
    }
  };
  const wallets = useMemo(() => {
    return (
      connectors?.map((c) => ({
        id: c.id,
        name: c.name,
        logo: c.logo,
        installed: c.installed,
      })) || []
    );
  }, [connectors]);

  useEffect(() => {
    init({ network, defaultConnectorId });
  }, []);

  useEffect(() => {
    init({ network, defaultConnectorId });
  }, [network, defaultConnectorId]);

  return (
    <>
      {!connected ? (
        <>
          <button
            onClick={handleConnect}
            className={`bg-clip-text text-transparent border  rounded-xl h-10 px-4 leading-none hover:border-yellow-500 ${theme === 'dark'
              ? 'bg-gradient-to-r from-pink-500 to-violet-500 border-gray-600'
              : 'bg-gradient-to-r from-blue-500 to-green-500 border-gray-300'
              } ${connectClass}`}
          >
            {connectText}
          </button>
          <WalletSelectModal
            theme={theme}
            className={modalClass}
            zIndex={modalZIndex}
            title={modalTitle}
            onClose={() => setModalVisible(false)}
            visible={modalVisible}
            wallets={wallets}
            onClick={walletSelect}
          />
        </>
      ) : !!children ? (
        children
      ) : (
        <button
          onClick={handlerDisconnect}
          className={`bg-clip-text text-transparent border border-gray-300 rounded-xl leading-none h-10 px-4 hover:border-yellow-500 flex justify-center items-center ${theme === 'dark'
            ? 'bg-gradient-to-r from-pink-500 to-violet-500'
            : 'bg-gradient-to-r from-blue-500 to-green-500'
            } ${disconnectClass}`}
        >
          <span className='mr-1'>{hideStr(address, 4, '***')}</span>
          <ExitIcon
            className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}
          />
        </button>
      )}
    </>
  );
};
