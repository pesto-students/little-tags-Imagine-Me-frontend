const getLocale = () => navigator.userLanguage ||
    (navigator.languages && navigator.languages.length && navigator.languages[0])
    || navigator.language
    || navigator.browserLanguage
    || navigator.systemLanguage
    || 'en';
export default getLocale