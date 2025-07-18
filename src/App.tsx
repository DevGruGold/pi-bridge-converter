import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi';
import { WagmiConfig } from 'wagmi';
import { arbitrum, mainnet } from 'viem/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const projectId = '93d6f5f37345b4cf181b296567177797';

const metadata = {
  name: 'Pi Bridge',
  description: 'Bridge between Pi Network and other chains',
  url: 'https://bridge.pi.network',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const wagmiConfig = defaultWagmiConfig({
  chains: [mainnet, arbitrum],
  projectId,
  metadata,
});

// Initialize web3modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  themeMode: 'light',
  themeVariables: {
    '--w3m-font-family': 'Roboto, sans-serif',
    '--w3m-accent': '#7c3aed' // purple-600
  }
});

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </WagmiConfig>
  );
}

export default App;