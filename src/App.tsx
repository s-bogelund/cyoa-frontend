import i18next from 'i18next';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Route, Routes } from 'react-router-dom';
import { SmoothStepEdge } from 'reactflow';

import StoryNode, { StoryNodeProps } from './components/graph/StoryNode';
import PageContainer from './components/PageContainer';
import { buttonVariants } from './components/shadcn/ui/button';
import { cn } from './lib/utils';
import GraphPage from './pages/GraphPage';
import LoginPage from './pages/LoginPage';
import PlayNode from './pages/PlayNode';
import SearchPage from './pages/SearchPage';
import SignUpPage from './pages/SignUpPage';
import StoryPage from './pages/StoryHomePage';
import UserDashboardPage from './pages/UserDashboardPage';
import WriterStorySummary from './pages/WriterStorySummary';

function App() {
	const { t } = useTranslation();
	const changeLanguage = () => {
		const currentLanguage = i18next.language;
		const newLanguage = currentLanguage === 'en' ? 'da' : 'en';
		i18next.changeLanguage(newLanguage);
	};

	const nodeTypes = useMemo(() => ({ testNode: StoryNode }), []);

	return (
		<PageContainer>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/playnode" element={<PlayNode />} />
				<Route path="/story-page" element={<StoryPage title={'Troldehulen'} />} />
				<Route path="/sign-up" element={<SignUpPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="search-story" element={<SearchPage />} />
				<Route path="graph-test" element={<GraphPage nodeTypes={nodeTypes} />} />
				<Route path="user-dashboard" element={<UserDashboardPage />} />
				<Route path="writer-story-summary" element={<WriterStorySummary />} />
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
