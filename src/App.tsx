import i18next from 'i18next';
import { Button, buttonVariants } from './components/shadcn/ui/button';
import { useTranslation } from 'react-i18next';
import OptionButton from './components/OptionButton';
import AppContainer from './components/AppContainer';
import PageContainer from './components/PageContainer';
import StoryNode from './pages/StoryNode';
import { Link, Route, Routes } from 'react-router-dom';
import { cn } from './lib/utils';
import StoryPage from './pages/StoryPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
	const { t } = useTranslation();
	const changeLanguage = () => {
		const currentLanguage = i18next.language;
		const newLanguage = currentLanguage === 'en' ? 'da' : 'en';
		i18next.changeLanguage(newLanguage);
	};

	return (
		<PageContainer>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/node" element={<StoryNode />} />
				<Route path="/story-page" element={<StoryPage />} />
				<Route path="/sign-up" element={<SignUpPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route
					path="*"
					element={
						<div className="flex flex-col min-w-full min-h-[100vh] justify-center items-center text-4xl gap-8">
							Something's wrong here mate...
							<Link to="/" className={cn(buttonVariants())}>
								Go back
							</Link>
						</div>
					}
				/>
			</Routes>
		</PageContainer>
	);
}

export default App;
