let bowling = require('./bowling');
const arr = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
describe('valid easy test cases', () => {
  test('test case 1', () => {
    expect(bowling(arr)).toBe(90);
  });
  const arr = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 7, 9];
  test('test case 2', () => {
    expect(bowling(arr)).toBeFalsy();
  });
};
