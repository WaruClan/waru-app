import { Networks } from "./networks.interface";

export const harmonyNetworks: Networks[] = [
    {
        chainId: 137,
        rpcURL: 'https://polygon-rpc.com/',
        explorer: 'https://polygonscan.com/',
        name: 'Matic Mainnet',
        yoichiNft: '0xDE16eA1D873e3dD149c488A4C14B8116244e9b51',
        multicall: '0xca11bde05977b3631167028862be2a173976ca11'
    },
    {
        chainId: 1666700000,
        rpcURL: 'https://api.s0.b.hmny.io',
        explorer: 'https://explorer.pops.one/',
        name: 'Harmony Testnet',
        yoichiNft: '0x3C23c9B0F1e1DA555411b63dE96a703228BbF606',
        multicall: '0xd078799c53396616844e2fa97f0dd2b4c145a685'
    },
    {
        chainId: 31337,
        rpcURL: 'http://localhost:8545',
        explorer: 'https://explorer.pops.one/',
        name: 'Localhost Net',
        yoichiNft: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
        multicall: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
    }
]
export function returnNetwork(networkId: number) {
    return harmonyNetworks.find((network) => network.chainId === networkId)
}