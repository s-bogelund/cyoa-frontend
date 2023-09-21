import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@/components/theme-provider';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import App from './App.tsx';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.ts';

// await i18next.init({
// 	lng: 'en', // if you're using a language detector, do not define the lng option
// 	debug: true,
// 	resources: {
// 		en: {
// 			translation: {
// 				key: 'hello world',
// 			},
// 		},
// 	},
// });

const client = new ApolloClient({
	// TODO: Change below to the real API
	uri: 'https://flyby-router-demo.herokuapp.com/',
	cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
	<React.StrictMode>
		<I18nextProvider i18n={i18n}>
			<ApolloProvider client={client}>
				<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
					<App />
				</ThemeProvider>
			</ApolloProvider>
		</I18nextProvider>
	</React.StrictMode>
);
