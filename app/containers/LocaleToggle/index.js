/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import Toggle from 'components/Toggle';
import Wrapper from './styled/Wrapper';
import messages from './localeToggle.message';
import { appLocales } from '../../i18n';
import { changeLocale } from '../LanguageProvider/language.provider.action';
import { makeSelectLocale } from '../LanguageProvider/language.provider.selector';

export function LocaleToggle(props) {
  return (
    <Wrapper>
      <FormattedMessage {...messages.languageMessage} />
      <Toggle
        value={props.locale}
        values={appLocales}
        messages={messages}
        onToggle={props.onLocaleToggle}
      />
    </Wrapper>
  );
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({
    locale,
  }),
);

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: evt => dispatch(changeLocale(evt.target.value)),
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocaleToggle);
