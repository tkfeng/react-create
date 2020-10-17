import loadable from '../loadable';

describe('loadable', () => {
  it('should load without fallback', () => {
    const spy = jest.fn(() => {});
    loadable(spy)();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should load with empty fallback', () => {
    const spy = jest.fn(() => {});
    const fallback = {};
    loadable(spy, fallback)();

    expect(spy).not.toHaveBeenCalled();
  });
});
