import i18next from 'i18next';
import { Button } from './components/ui/buttons/button';
import { useTranslation } from 'react-i18next';
import OptionButton from './components/ui/buttons/OptionButton';
import AppContainer from './components/ui/AppContainer';
import PageContainer from './components/ui/PageContainer';
import Node from './components/Playthrough/Node';

function App() {
	const { t } = useTranslation();
	const changeLanguage = () => {
		const currentLanguage = i18next.language;
		const newLanguage = currentLanguage === 'en' ? 'da' : 'en';
		i18next.changeLanguage(newLanguage);
	};

	return (
		<AppContainer>
			<Node></Node>
		</AppContainer>
	);
}

export default App;
