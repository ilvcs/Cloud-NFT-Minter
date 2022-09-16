require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({ path: __dirname + '/.env' })
const {POLYGON_MUMBAI_PRIVATEKEY, POLYGON_MUMBAI_URL, SHINE_PRIVATEKEY,SHINE_JSON_RPC, GANACHE_PRIVATEKEY, GANACHE_URL } = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: POLYGON_MUMBAI_URL,
      accounts: [POLYGON_MUMBAI_PRIVATEKEY],
      gasPrice: 20000000000,
      saveDeployments: true,
    },
    shine: {
    url: SHINE_JSON_RPC,
    accounts: [SHINE_PRIVATEKEY],
    gasPrice: 4000000000,
    saveDeployments: true,
  },

    ganache: {
      url: GANACHE_URL,
      accounts: [GANACHE_PRIVATEKEY],
      gasPrice: 20000000000,
      saveDeployments: true,
    }
}

}
