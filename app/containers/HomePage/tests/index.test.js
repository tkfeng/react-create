/**
 * Test the HomePage
 */

import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import _ from 'lodash';

import { HomePage, mapDispatchToProps } from '../index';
import { changeUsername } from '../homePage.action';
import { loadRepos } from '../../App/app.action';
import configureStore from '../../../configureStore';

describe('<HomePage />', () => {
  let store;
  jest.unmock('lodash');
  _.debounce = jest.fn(fn => fn);

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage loading={false} error={false} repos={[]} />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should fetch the repos on mount if a username exists', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage
            username="Not Empty"
            onChangeUsername={() => {}}
            onSubmitForm={submitSpy}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should call onChangeUsername', () => {
    const changeSpy = jest.fn();
    const username = 'tkfeng';
    const { getByDisplayValue } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage
            username={username}
            onChangeUsername={changeSpy}
            onSubmitForm={() => {}}
          />
        </IntlProvider>
      </Provider>,
    );
    // console.log(getByDisplayValue(username));
    fireEvent.change(getByDisplayValue(username), { target: { value: 'a' } });
    expect(changeSpy).toHaveBeenCalled();
    // expect(getByDisplayValue(username)).not.toBeNull();
  });

  it('should not call onSubmitForm if username is an empty string', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage onChangeUsername={() => {}} onSubmitForm={submitSpy} />
        </IntlProvider>
      </Provider>,
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('should not call onSubmitForm if username is null', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage
            username=""
            onChangeUsername={() => {}}
            onSubmitForm={submitSpy}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeUsername', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeUsername).toBeDefined();
      });

      it('should dispatch changeUsername when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const username = 'tkfeng';
        result.onChangeUsername({ target: { value: username } });
        expect(dispatch).toHaveBeenCalledWith(changeUsername(username));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch loadRepos when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(loadRepos());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
