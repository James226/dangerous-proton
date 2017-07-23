import reducer from '../reducer';

describe('values reducer tests', () => {
  it('should return the default state if no arguments are provided', () => {
    expect(reducer(undefined, { type: '' })).toEqual({ });
  });
});
