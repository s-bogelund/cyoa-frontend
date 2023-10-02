import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@/components/shadcn/ui/theme-provider.tsx';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import App from './App.tsx';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.ts';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Button } from './components/shadcn/ui/button.tsx';
import AppContainer from './components/AppContainer.tsx';
import { Toaster } from './components/shadcn/ui/toaster.tsx';
import { TooltipProvider } from '@radix-ui/react-tooltip';

const client = new ApolloClient({
	// TODO: Change below to the real API
	uri: 'https://flyby-router-demo.herokuapp.com/',
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
