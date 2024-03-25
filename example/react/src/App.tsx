import React from 'react';
import './App.css';
import {
  WalletConnectReact,
  useReactWalletStore,
} from 'btc-connect/dist/react';
import 'btc-connect/dist/style/index.css';

function App() {
  const { address, publicKey, network } = useReactWalletStore((state) => state);

  const onConnectSuccess = async () => {
    alert('btc-connect connect success');
  };
  const onConnectError = async (error: unknown) => {
    alert('btc-connect connect error' + error);
  };
  const onDisconnectSuccess = async () => {
    alert('disconnect success');
  };
  return (
    <>
      <div className='continer'>
        <WalletConnectReact
          config={{
            network: 'livenet',
            defaultConnectorId: 'okx',
          }}
          theme='dark'
          onConnectSuccess={onConnectSuccess}
          onConnectError={onConnectError}
          onDisconnectSuccess={onDisconnectSuccess}
        />
      </div>
      <div>
        <div>Address: {address}</div>
        <div>publicKey: {publicKey}</div>
        <div>network: {network}</div>
      </div>
    </>
  );
}

export default App;
