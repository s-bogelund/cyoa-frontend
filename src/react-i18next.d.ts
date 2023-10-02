import 'react-i18next';

import en from '../public/locales/en/translation.json';

declare module 'react-i18next' {
	interface CustomTypeOptions {
		resources: {
			en: typeof en;
			no: typeof no;
		};
	}
}
