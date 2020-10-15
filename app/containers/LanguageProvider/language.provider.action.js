/*
 *
 * LanguageProvider actions
 *
 */

import { CHANGE_LOCALE } from './language.provider.constant';

export function changeLocale(languageLocale) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  };
}
