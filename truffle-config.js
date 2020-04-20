require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remain honey idea enroll only task'; 
let testAccounts = [
"0xe562f4afc279a0f7e242b85e2caf2869d5a78a9563a2f18cbacb9f579e18c200",
"0x44a65c09e39bc42643fe11ce3ec14aa1d447f1624bcf760f8f93726bf15a03f1",
"0x6ebef18c2016e1be74f3fe2f32e489d78676bec86a6440f362e1765450230bae",
"0x8ce1dcad27de6a375ee97e3958f0ed408f5505273ace0ba661c0717ca73c7a50",
"0xabf6d0938b1f67a11a5d221a081876d2ca857b2cfdbd652b142076aedfddba39",
"0xd2091350705ef5f60a0fe53dba2ebb0fae57a34fe54635616fb32da4ec2ac24e",
"0xe56a6b9f60f3a4226626aac95520c5be6be8ce10b53f52ffe2e76dcccfd16225",
"0x90955b8300b2c71e8702eca7dea96ffb0df46a3f948aa17667d22a88e12f15ea",
"0x3e120713a6d178496e99c0d766c457d3d5d8ebdc617e019a2de4c76352aedbb1",
"0x022174cb31f3a6356f15aa4d94d5062d31fbbd3912f3fb487d0c2244276423b0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
