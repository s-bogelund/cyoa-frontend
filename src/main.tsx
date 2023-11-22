import './index.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@/components/shadcn/ui/theme-provider.tsx';

import App from './App.tsx';
import AppContainer from './components/AppContainer.tsx';
import { Toaster } from './components/shadcn/ui/toaster.tsx';
import i18n from './i18n.ts';

const client = new ApolloClient({
	// TODO: Change below to the real API
	uri: 'http://localhost:5186/graphql/',
	cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Toaster />
			<TooltipProvider>
				<I18nextProvider i18n={i18n}>
					<ApolloProvider client={client}>
						<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
							<AppContainer>
								<App />
							</AppContainer>
						</ThemeProvider>
					</ApolloProvider>
				</I18nextProvider>
			</TooltipProvider>
		</BrowserRouter>
	</React.StrictMode>
);
