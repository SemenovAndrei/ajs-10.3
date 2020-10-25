import json from '../parser mock';

describe('original json mock', () => {
  test('load data', () => {
    const expected = json();
    const result = new Error('mocked');
    expect(expected).toEqual(result);
  });
});
