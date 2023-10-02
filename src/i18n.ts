// src/i18n.js
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
//@ts-ignore
i18n
	.use(HttpApi) // if you want to use the http backend
	.use(LanguageDetector) // detect user language
	.use(initReactI18next) // passes i18next down to react-i18next
	.init({
		load: 'languageOnly', // detect only language - not region!
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json', // path to your translation files
		},
	});

export default i18n;
