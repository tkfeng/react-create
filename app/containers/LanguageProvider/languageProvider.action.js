/*
 *
 * LanguageProvider actions
 *
 */

import { CHANGE_LOCALE } from './languageProvider.constant';

export function changeLocale(languageLocale) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  };
}
