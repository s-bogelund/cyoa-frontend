import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Link, Route, Routes } from 'react-router-dom';

import PageContainer from './components/PageContainer';
import { buttonVariants } from './components/shadcn/ui/button';
import { cn } from './lib/utils';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import StoryPage from './pages/StoryHomePage';
import StoryNode from './pages/StoryNode';

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
				<Route path="/story-page" element={<StoryPage title={'Troldehulen'} />} />
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
