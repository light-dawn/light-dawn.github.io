import 'server-only';


interface DictionaryMapping {
    [key: string]: any
}


const dictionaries: DictionaryMapping = {
    en: () => import('@/i18n/en.json').then((module) => module.default),
    zh: () => import('@/i18n/zh.json').then((module) => module.default),
};

export const getDictionary = async (locale: any) => dictionaries[locale]();