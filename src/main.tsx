import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@/components/theme-provider';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import App from './App.tsx';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.ts';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Button } from './components/ui/button.tsx';
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
		<BrowserRouter>
			<I18nextProvider i18n={i18n}>
				<ApolloProvider client={client}>
					<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
						<Routes>
							<Route path="/" element={<App />} />
							<Route
								path="*"
								element={
									<div className="flex flex-col min-w-full min-h-[100vh] justify-center items-center text-4xl gap-8">
										Something's wrong here mate...
										<Button>
											<Link to="/">Go back</Link>
										</Button>
									</div>
								}
							/>
						</Routes>
					</ThemeProvider>
				</ApolloProvider>
			</I18nextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
