import i18next from 'i18next';
import { Button } from './components/ui/button';
import { useTranslation } from 'react-i18next';

function App() {
	const { t } = useTranslation();
	const changeLanguage = () => {
		const currentLanguage = i18next.language;
		const newLanguage = currentLanguage === 'en' ? 'da' : 'en';
		i18next.changeLanguage(newLanguage);
	};

	return (
		<div
			className="flex container flex-col justify-center items-center min-h-[100vh] gap-2
      "
		>
			<h1>Hello World</h1>
			<Button>{t('hello')}</Button>
			<Button onClick={changeLanguage}>{t('changeLanguage')}</Button>
		</div>
	);
}

export default App;
