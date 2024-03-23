// src/assets/index.ts
var unisatLogo = `
<svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <linearGradient x1="91.8755667%" y1="29.7288622%" x2="5.59359385%" y2="67.7387248%" id="linearGradient-eyvd9sygfy-1">
            <stop stop-color="#201C1B" offset="0%"></stop>
            <stop stop-color="#77390D" offset="36%"></stop>
            <stop stop-color="#EA8101" offset="67%"></stop>
            <stop stop-color="#F4B852" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="10.5140624%" y1="62.8831688%" x2="110.78862%" y2="37.3217402%" id="linearGradient-eyvd9sygfy-2">
            <stop stop-color="#1F1D1C" offset="0%"></stop>
            <stop stop-color="#77390D" offset="37%"></stop>
            <stop stop-color="#EA8101" offset="67%"></stop>
            <stop stop-color="#F4FB52" offset="100%"></stop>
        </linearGradient>
        <radialGradient cx="50%" cy="50.0450988%" fx="50%" fy="50.0450988%" r="50.8328236%" gradientTransform="translate(0.500000,0.500451),scale(0.983612,1.000000),translate(-0.500000,-0.500451)" id="radialGradient-eyvd9sygfy-3">
            <stop stop-color="#F4B852" offset="0%"></stop>
            <stop stop-color="#EA8101" offset="33%"></stop>
            <stop stop-color="#77390D" offset="64%"></stop>
            <stop stop-color="#211C1D" offset="100%"></stop>
        </radialGradient>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group">
            <g transform="translate(15.000000, 6.000000)" fill-rule="nonzero" id="Path">
                <path d="M49.3710406,7.90193833 L67.695996,25.7542497 C69.2558762,27.2706245 70.0236018,28.8049779 70,30.351134 C69.975293,31.8972901 69.304185,33.306617 67.9922991,34.5851533 C66.61989,35.9232522 65.1386489,36.6012223 63.5546143,36.6308663 C61.9705797,36.6547462 60.3986223,35.9054109 58.8387421,34.3890361 L40.0967116,16.1322895 C37.9685168,14.0569324 35.9129225,12.5880155 33.9359672,11.7257309 C31.9588746,10.8634462 29.8791259,10.7266719 27.7026223,11.3213505 C25.5200801,11.9100866 23.180397,13.4265163 20.6713587,15.8646697 C17.2131622,19.2365416 15.5625658,22.4002191 15.7319211,25.3558393 C15.9011391,28.3113223 17.6181602,31.3798919 20.8769456,34.5496079 L39.7702155,52.9608878 C41.3482115,54.4951039 42.1219758,56.0293201 42.0978214,57.5517335 C42.073667,59.0800483 41.3965203,60.4895124 40.0603428,61.7917914 C38.7303411,63.0881691 37.2611772,63.7661391 35.6650654,63.8196631 C34.0689536,63.8731871 32.4788804,63.1298903 30.906923,61.5955369 L12.5819677,43.7432393 C9.60136961,40.8412802 7.44903413,38.0938544 6.12500245,35.5009619 C4.80095704,32.9082066 4.3052017,29.9764663 4.64981362,26.7057409 C4.95815278,23.9047912 5.87106559,21.193048 7.39463183,18.5646101 C8.91213203,15.936035 11.0886494,13.2481168 13.9121066,10.4947485 C17.2735482,7.21806687 20.4838876,4.70852075 23.5431247,2.9601539 C26.5963233,1.2117994 29.5526297,0.242470963 32.40628,0.0402802422 C35.2659688,-0.161910753 38.0833875,0.397087945 40.8704759,1.71727277 C43.6577015,3.0374617 46.4871974,5.09505978 49.365002,7.90193833 L49.3710406,7.90193833 Z" fill="url(#linearGradient-eyvd9sygfy-1)"></path>
                <path d="M20.6229126,79.9354515 L2.30402336,62.0831539 C0.744193952,60.5607404 -0.0236295541,59.0324257 2.04580849e-15,57.4862696 C0.0247372993,55.9401135 0.69582751,54.5307866 2.00777513,53.252113 C3.38018424,51.9141514 4.86142538,51.2361813 6.44543252,51.2064 C8.02945339,51.1826573 9.60136961,51.9259541 11.1612086,53.4483675 L29.8972417,71.7051141 C32.0314751,73.7804711 34.0810308,75.2493606 36.0579861,76.1116453 C38.0350787,76.9739299 40.1148274,77.1047205 42.2973696,76.515957 C44.4799118,75.9273307 46.8195949,74.4108186 49.3286332,71.9666953 C52.7869669,68.5948233 54.4374261,65.4311459 54.2682081,62.4756629 C54.0988528,59.5200426 52.3818317,56.4514731 49.1231836,53.2759929 L39.0568373,43.5528861 C37.4788413,42.01867 36.7049398,40.4843166 36.7290942,38.9620404 C36.7532486,37.4337257 37.4303952,36.0242615 38.7665727,34.7219825 C40.0967116,33.4254676 41.5658756,32.7476348 43.1618501,32.6941108 C44.7579619,32.6405869 46.3480351,33.3838836 47.9199925,34.918237 L57.4119856,44.0822243 C60.3925837,46.9841834 62.5449329,49.7316092 63.8690332,52.3245017 C65.1929963,54.917257 65.6887104,57.8489973 65.3440985,61.1197227 C65.0358554,63.9206724 64.1229289,66.6324156 62.5992803,69.2609907 C61.0818075,71.8894286 58.9053039,74.5774291 56.0818467,77.3307563 C52.7204051,80.607383 49.5100657,83.1169703 46.4508286,84.8652822 C43.3915914,86.6137314 40.435285,87.5889654 37.5755961,87.7911212 C34.7159073,87.9934143 31.8984886,87.4342949 29.1114002,86.1141745 C26.3241745,84.793917 23.4946787,82.7364012 20.616874,79.9295501 L20.6229126,79.9354515 Z" fill="url(#linearGradient-eyvd9sygfy-2)"></path>
                <path d="M32.0495909,33.8716378 C35.7659375,33.8716378 38.7786499,30.9083321 38.7786499,27.2527832 C38.7786499,23.5973715 35.7659375,20.6340658 32.0495909,20.6340658 C28.3332442,20.6340658 25.3205318,23.5973715 25.3205318,27.2527832 C25.3205318,30.9083321 28.3332442,33.8716378 32.0495909,33.8716378 Z" fill="url(#radialGradient-eyvd9sygfy-3)"></path>
            </g>
            <rect id="Rectangle" x="0" y="0" width="100" height="100"></rect>
        </g>
    </g>
</svg>
`;
var okxLogo = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns:xodm="http://www.corel.com/coreldraw/odm/2003" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 2500 2500" style="enable-background:new 0 0 2500 2500;" xml:space="preserve">
<style type="text/css">
	.st0{fill-rule:evenodd;clip-rule:evenodd;}
	.st1{fill:#FFFFFF;}
</style>
<g id="Layer_x0020_1">
	<g id="_2187381323856">
		<rect y="0" class="st0" width="2500" height="2500"></rect>
		<g>
			<path class="st1" d="M1463,1015h-404c-17,0-31,14-31,31v404c0,17,14,31,31,31h404c17,0,31-14,31-31v-404     C1494,1029,1480,1015,1463,1015z"></path>
			<path class="st1" d="M996,549H592c-17,0-31,14-31,31v404c0,17,14,31,31,31h404c17,0,31-14,31-31V580C1027,563,1013,549,996,549z"></path>
			<path class="st1" d="M1930,549h-404c-17,0-31,14-31,31v404c0,17,14,31,31,31h404c17,0,31-14,31-31V580     C1961,563,1947,549,1930,549z"></path>
			<path class="st1" d="M996,1482H592c-17,0-31,14-31,31v404c0,17,14,31,31,31h404c17,0,31-14,31-31v-404     C1027,1496,1013,1482,996,1482z"></path>
			<path class="st1" d="M1930,1482h-404c-17,0-31,14-31,31v404c0,17,14,31,31,31h404c17,0,31-14,31-31v-404     C1961,1496,1947,1482,1930,1482z"></path>
		</g>
	</g>
</g>
</svg>
`;

// src/connectors/base.ts
class BtcConnector {
  ready = false;
  installed = false;
  connected = false;
  address = "";
  publicKey;
  network;
  constructor(network) {
    this.network = network;
  }
  disconnect() {
    this.address = undefined;
    this.publicKey = undefined;
  }
  getAccount() {
    return this.address;
  }
  isAuthorized() {
    const address = this.getAccount();
    return !!address;
  }
  async getNetwork() {
    if (!this.network) {
      throw new Error("Something went wrong while connecting");
    }
    return this.network;
  }
  async getPublicKey() {
    if (!this.publicKey) {
      throw new Error("Something went wrong while connecting");
    }
    return this.publicKey;
  }
}

// src/connectors/unisat.ts
var getUnisatNetwork = (network) => {
  switch (network) {
    case "testnet":
      return "testnet";
    default:
      return "livenet";
  }
};

class UnisatConnector extends BtcConnector {
  id = "unisat";
  name = "Unisat";
  logo = unisatLogo;
  homepage = "https://unisat.io";
  banance = { confirmed: 0, unconfirmed: 0, total: 0 };
  unisat;
  constructor(network) {
    super(network);
    this.unisat = window.unisat;
  }
  on(event, handler) {
    this.unisat.on(event, handler);
  }
  removeListener(event, handler) {
    this.unisat.removeListener(event, handler);
  }
  async connect() {
    this.connected = false;
    try {
      if (!this.unisat) {
        throw new Error("Unisat not installed");
      }
      await this.getCurrentInfo();
    } catch (error) {
      throw error;
    }
    return this.connected;
  }
  async getCurrentInfo() {
    const accounts = await this.unisat.getAccounts();
    if (accounts.length) {
      this.address = accounts[0];
      const [publicKey, network, banance] = await Promise.all([
        this.unisat.getPublicKey(),
        this.unisat.getNetwork(),
        this.unisat.getBalance()
      ]);
      this.publicKey = publicKey;
      this.network = network;
      this.banance = banance;
      this.connected = true;
    }
  }
  async disconnect() {
    this.address = undefined;
    this.publicKey = undefined;
    this.connected = false;
    this.banance = { confirmed: 0, unconfirmed: 0, total: 0 };
  }
  async getAccounts() {
    return this.unisat.getAccounts();
  }
  async sendToAddress(toAddress, amount) {
    return this.unisat?.sendBitcoin(toAddress, amount);
  }
  async switchNetwork(network) {
    await this.unisat.switchNetwork(getUnisatNetwork(network));
  }
  async getPublicKey() {
    return this.unisat.getPublicKey();
  }
  async getBalance() {
    return this.unisat.getBalance();
  }
  async signPsbt(psbtHex, options) {
    return this.unisat.signPsbt(psbtHex, options);
  }
  async signMessage(message) {
    return this.unisat.signMessage(message);
  }
  async signPsbts(psbtHexs, options) {
    return this.unisat.signPsbts(psbtHexs, options);
  }
  async pushTx(rawTx) {
    return this.unisat.pushTx({ rawtx: rawTx });
  }
  async pushPsbt(psbtHex) {
    return this.unisat.pushPsbt(psbtHex);
  }
}
// src/connectors/okx.ts
class OkxConnector extends BtcConnector {
  id = "okx";
  name = "OKX";
  logo = okxLogo;
  homepage = "https://www.okx.com/web3/build/docs/sdks/chains/bitcoin/provider";
  banance = { confirmed: 0, unconfirmed: 0, total: 0 };
  okxwallet;
  constructor(network) {
    super(network);
    this.okxwallet = network === "testnet" ? window.okxwallet.bitcoinTestnet : window.okxwallet.bitcoin;
  }
  on(event, handler) {
    if (this.network === "livenet") {
      this.okxwallet.on(event, handler);
    }
  }
  async connect() {
    this.connected = false;
    try {
      if (!this.okxwallet) {
        throw new Error("OkxWallet not installed");
      }
      const res = await this.okxwallet.connect();
      this.connected = true;
      this.address = res.address;
      this.publicKey = res.publicKey;
      await this.getCurrentInfo();
    } catch (error) {
      throw error;
    }
    return this.connected;
  }
  async getCurrentInfo() {
    if (this.network === "livenet") {
      const accounts = await this.okxwallet.getAccounts();
      if (accounts.length) {
        this.address = accounts[0];
        const [publicKey, network, banance] = await Promise.all([
          this.okxwallet.getPublicKey(),
          this.okxwallet.getNetwork(),
          this.okxwallet.getBalance()
        ]);
        this.publicKey = publicKey;
        this.network = network;
        this.banance = banance;
        this.connected = true;
      }
    }
  }
  async disconnect() {
    this.address = undefined;
    this.publicKey = undefined;
    this.connected = false;
    this.banance = { confirmed: 0, unconfirmed: 0, total: 0 };
  }
  async getAccounts() {
    if (this.network !== "livenet") {
      throw new Error("Can't get accounts on testnet");
    }
    return this.okxwallet.getAccounts();
  }
  async getNetwork() {
    return this.network;
  }
  async getPublicKey() {
    if (this.network !== "livenet") {
      throw new Error("Can't get accounts on testnet");
    }
    return this.okxwallet.getPublicKey();
  }
  async getBalance() {
    if (this.network !== "livenet") {
      throw new Error("Can't get accounts on testnet");
    }
    return this.okxwallet.getBalance();
  }
  async sendToAddress(toAddress, amount) {
    if (this.network !== "livenet") {
      throw new Error("Can't get accounts on testnet");
    }
    return this.okxwallet?.sendBitcoin(toAddress, amount);
  }
  async switchNetwork(network) {
    this.network = network;
    this.okxwallet = network === "testnet" ? window.okxwallet.bitcoinTestnet : window.okxwallet.bitcoin;
  }
  async signPsbt(psbtHex, options) {
    return this.okxwallet.signPsbt(psbtHex, options);
  }
  async signMessage(message) {
    return this.okxwallet.signMessage(message);
  }
  async signPsbts(psbtHexs, options) {
    return this.okxwallet.signPsbts(psbtHexs, options);
  }
  async pushTx(rawTx) {
    if (this.network !== "livenet") {
      throw new Error("Can't get accounts on testnet");
    }
    return this.okxwallet.pushTx(rawTx);
  }
  async pushPsbt(psbtHex) {
    if (this.network !== "livenet") {
      throw new Error("Can't get accounts on testnet");
    }
    return this.okxwallet.pushPsbt(psbtHex);
  }
}
// src/index.ts
class BtcWalletConnect {
  local_storage_key = "btc_connector_id";
  connectorId = "unisat";
  localConnectorId;
  connected = false;
  installed = false;
  address;
  publicKey;
  network;
  balance = { confirmed: 0, unconfirmed: 0, total: 0 };
  connectors;
  connector;
  constructor({
    network = "livenet",
    defaultConnectorId = "unisat"
  }) {
    this.network = network;
    this.connectors = [
      {
        id: "unisat",
        instance: new UnisatConnector(this.network),
        installed: !!window.unisat
      },
      {
        id: "okx",
        instance: new OkxConnector(this.network),
        installed: !!window.okxwallet
      }
    ];
    this.localConnectorId = localStorage.getItem(this.local_storage_key) || undefined;
    this.connectorId = defaultConnectorId;
    this.connector = this.connectors.find((c) => c.id === defaultConnectorId && c.installed)?.instance;
  }
  async switchConnector(id) {
    const _c = this.connectors.find((c) => c.id === id && c.installed)?.instance;
    if (!_c) {
      throw new Error("Connector not found");
    }
    this.connector = _c;
    return _c;
  }
  async connect() {
    if (!this.connector) {
      throw new Error("Connector not found");
    }
    this.connected = await this.connector.connect();
    if (this.connected) {
      this.address = this.connector.address;
      this.publicKey = this.connector.publicKey;
      this.balance = this.connector.banance;
    }
    localStorage.setItem(this.local_storage_key, this.connectorId);
    return this.connected;
  }
  async getCurrentInfo() {
    if (!this.connector) {
      throw new Error("Connector not found");
    }
    try {
      await this.connector.getCurrentInfo();
      this.address = this.connector.address;
      this.publicKey = this.connector.publicKey;
      this.balance = this.connector.banance;
      this.connected = this.connector.connected;
    } catch (error) {
      throw error;
    }
  }
  async check() {
    if (!this.connector) {
      throw new Error("Connector not found");
    }
    this.connectorId = this.localConnectorId || this.connectorId;
    const _c = this.connectors.find((c) => c.id === this.connectorId && c.installed)?.instance;
    if (!_c) {
      throw new Error("Connector not found");
    }
    this.connector = _c;
    try {
      await this.getCurrentInfo();
    } catch (error) {
      console.error(error);
    }
  }
  async disconnect() {
    if (!this.connector) {
      throw new Error("Connector not found");
    }
    await this.connector.disconnect();
    this.connected = false;
    this.address = undefined;
    this.publicKey = undefined;
    this.balance = { confirmed: 0, unconfirmed: 0, total: 0 };
    localStorage.removeItem(this.local_storage_key);
  }
  async getAccounts() {
    if (!this.connector) {
      throw new Error("Connector not found");
    }
    return this.connector.getAccounts();
  }
  async getNetwork() {
    if (!this.connector) {
      throw new Error("Connector not found");
    }
    return this.connector.network;
  }
  async switchNetwork(network) {
    if (!this.connector) {
      throw new Error("Connector not found");
    }
    await this.connector.switchNetwork(network);
    this.network = network;
  }
  async sendToAddress(toAddress, amount) {
    if (!this.connector) {
      throw new Error("Connector not found");
    }
    return this.connector.sendToAddress(toAddress, amount);
  }
  async signMessage(message, type) {
    if (!this.connector) {
      throw new Error("Connector not found");
    }
    return this.connector.signMessage(message);
  }
  async signPsbt(psbtHex, options) {
    if (!this.connector) {
      throw new Error("Connector not found");
    }
    return this.connector.signPsbt(psbtHex, options);
  }
  async signPsbts(psbtHexs, options) {
    if (!this.connector) {
      throw new Error("Connector not found");
    }
    return this.connector.signPsbts(psbtHexs, options);
  }
  async pushTx(rawTx) {
    if (!this.connector) {
      throw new Error("Connector not found");
    }
    return this.connector.pushTx(rawTx);
  }
  async pushPsbt(psbtHex) {
    if (!this.connector) {
      throw new Error("Connector not found");
    }
    return this.connector.pushPsbt(psbtHex);
  }
  on = (event, handler) => {
    if (!this.connector) {
      throw new Error("Connector not found");
    }
    if (this.connector instanceof UnisatConnector) {
      this.connector.on(event, handler);
    } else {
      this.connector.on(event, handler);
    }
  };
  removeListener = (event, handler) => {
    if (!this.connector) {
      throw new Error("Connector not found");
    }
    if (this.connector instanceof UnisatConnector) {
      this.connector.removeListener(event, handler);
    }
  };
}
var src_default = BtcWalletConnect;
export {
  src_default as default
};
