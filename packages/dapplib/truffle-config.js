require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drink fortune strategy guard render remain million inner clip tackle stable'; 
let testAccounts = [
"0x41e4098ccc1dd8cc1789221e0322f87b60b072bbb73ea3b39ab779a83ffb1ffa",
"0xfb6fdd6ca5ba1ad5f6a1b57c2336a269803b0ed447cbe20faea7b961e1b862f5",
"0xd2d4d680bc9acc01bace0bcd9ec9951c838ea736f8dea80b1291a7055d92e31c",
"0xa3c7bb3a5cebcc45f0dc5f33b3318da865425a914e5b9acbf0a623eb1c99d69d",
"0xe744c15ba6515c8ff07e2a8f7b81cfcbf99570adab6cd808557ec81dd573cc84",
"0x0d8175e3c9c05b28c6340cdf9f4e8a91bc30c31fc165817a571b3e7f5113da38",
"0x659eb25813fde125ede07b7773014568028a6a629281ed63715599613acdd63d",
"0xd40396d3d4d1842965555ede6539813d5a68a8329b4fa03fba895c2901a4d102",
"0x415d262463dab293be9a077c272a744e20b5e0a9079e72cb728491f80a9b2cfd",
"0xdee5edc2bb572990be42cbac888ef1785248b9b452068e680ef83b37f2d7f87c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

