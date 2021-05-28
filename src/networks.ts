// https://docs.metamask.io/guide/ethereum-provider.html#chain-ids
const networks: Map<string, string> = new Map([
    ['0x1', 'Ethereum Main Network (Mainnet)'],
    ['0x3', 'Ropsten Test Network'],
    ['0x4', 'Rinkeby Test Network'],
    ['0x5', 'Goerli Test Network'],
    ['0x2a', 'Kovan Test Network']
]);

function translate(chainId: string): string {
    return networks.get(chainId) || chainId;
}

export default translate;