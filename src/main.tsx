import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@/components/theme-provider';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import App from './App.tsx';
import './index.css';

const client = new ApolloClient({
	// TODO: Change below to the real API
	uri: 'https://flyby-router-demo.herokuapp.com/',
	cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
				<App />
			</ThemeProvider>
		</ApolloProvider>
	</React.StrictMode>
);
