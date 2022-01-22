import { Localization } from './i18next';

describe('i18next', () => {
    const i18next = Localization.init('app');
    const mockTranslations = {
        key: 'test',
    };

    beforeAll(() => {
        i18next.addResources('en', 'app', mockTranslations);
    });

    it('should return the current language', () => {
        expect(i18next.language).toEqual('en');
    });

    it('should return translation', () => {
        expect(i18next.t('key')).toEqual(mockTranslations.key);
    });

    it('should fallback to key if translation does not exist', () => {
        expect(i18next.t('not_existent')).toEqual('not_existent');
    });
});
