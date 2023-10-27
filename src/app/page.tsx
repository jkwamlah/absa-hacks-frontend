import Image from 'next/image'
import Landing from "@/components/Landing";
import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

export default function Home() {
    const {chains, publicClient} = configureChains(
        [mainnet, polygon, optimism, arbitrum, base, zora],
        [
            alchemyProvider({apiKey: process.env.ALCHEMY_ID}),
            publicProvider()
        ]
    );
    const {connectors} = getDefaultWallets({
        appName: 'My RainbowKit App',
        projectId: 'YOUR_PROJECT_ID',
        chains
    });


    return (
        <main className="flex min-h-screen min-w-full flex-col items-center justify-between">

            <Landing/>
        </main>
    )
}
