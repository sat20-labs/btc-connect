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

// --- Styles for WalletConnectReact ---
const styles = {
    buttonBase: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '0.75rem', // rounded-xl
        height: '2.5rem', // h-10
        paddingLeft: '1rem', // px-4
        paddingRight: '1rem',
        lineHeight: '1', // leading-none
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text', // For Safari compatibility
        color: 'transparent',
        cursor: 'pointer',
        transition: 'border-color 0.2s ease', // For hover effect
        display: 'inline-flex', // To align content vertically if needed
        alignItems: 'center',
        justifyContent: 'center',
    } as React.CSSProperties,
    connectButtonTheme: (theme: 'light' | 'dark'): React.CSSProperties => ({
        backgroundImage: theme === 'dark'
            ? 'linear-gradient(to right, #ec4899, #8b5cf6)' // from-pink-500 to-violet-500
            : 'linear-gradient(to right, #3b82f6, #22c55e)', // from-blue-500 to-green-500
        borderColor: theme === 'dark' ? '#4b5563' : '#d1d5db', // border-gray-600 / border-gray-300
    }),
    disconnectButtonTheme: (theme: 'light' | 'dark'): React.CSSProperties => ({
         backgroundImage: theme === 'dark'
            ? 'linear-gradient(to right, #ec4899, #8b5cf6)' // from-pink-500 to-violet-500
            : 'linear-gradient(to right, #3b82f6, #22c55e)', // from-blue-500 to-green-500
        borderColor: '#d1d5db', // border-gray-300 (seems constant in original)
    }),
    buttonHover: {
        borderColor: '#f59e0b', // border-yellow-500
    } as React.CSSProperties,
    disconnectButtonLayout: { // Specific layout for disconnect button
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    } as React.CSSProperties,
    disconnectText: {
        marginRight: '0.25rem', // mr-1
    } as React.CSSProperties,
    exitIcon: (theme: 'light' | 'dark'): React.CSSProperties => ({
        color: theme === 'dark' ? '#ffffff' : '#000000', // text-white / text-black
        width: '1em', // Maintain default size or adjust as needed
        height: '1em',
    }),
};
// --- End Styles ---

export const WalletConnectReact = ({
  config: { network = 'mainnet', enabledConnectors } = {},
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

  const [connectHover, setConnectHover] = useState(false);
  const [disconnectHover, setDisconnectHover] = useState(false);

  const handleConnect = () => {
    setModalVisible(true);
  };

  const walletSelect = async (id: BtcConnectorId) => {
    switchConnector(id);
    try {
      if (isSwitchNetwork) {
        await btcWallet?.switchNetwork(network);
      }
      console.log('walletSelect')
      await connect();
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
        downloadUrl: c.connector.downloadUrl,
        get installed() {
          return c.installed;
        },
      })) || []
    );
  }, [connectors]);

  useEffect(() => {
    init({ network, enabledConnectors });
  }, []);

  useEffect(() => {
    init({ network, enabledConnectors });
  }, [network]);

  return (
    <>
      {!connected ? (
        <>
          <button
            onClick={handleConnect}
            style={{
              ...styles.buttonBase,
              ...styles.connectButtonTheme(theme),
              ...(connectHover ? styles.buttonHover : {}),
            }}
            onMouseEnter={() => setConnectHover(true)}
            onMouseLeave={() => setConnectHover(false)}
            className={connectClass}
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
          style={{
            ...styles.buttonBase,
            ...styles.disconnectButtonTheme(theme),
            ...styles.disconnectButtonLayout,
            ...(disconnectHover ? styles.buttonHover : {}),
          }}
          onMouseEnter={() => setDisconnectHover(true)}
          onMouseLeave={() => setDisconnectHover(false)}
          className={disconnectClass}
        >
          <span style={styles.disconnectText}>{hideStr(address, 4, '***')}</span>
          <ExitIcon
            style={styles.exitIcon(theme)}
          />
        </button>
      )}
    </>
  );
};
