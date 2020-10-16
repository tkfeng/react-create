// import React from 'react';
// import { render } from 'react-testing-library';
import loadable from '../loadable';

describe.only('loadable', () => {
  it.only('should load TestLoadable', () => {
    const spy = jest.fn(() => {});
    loadable(spy)();

    expect(spy).not.toHaveBeenCalled();
  });
});
