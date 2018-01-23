let bowling = require('./bowling');


// describe('valid easy test cases', () => {
//   test('test case 1', () => {
//     expect(bowling(arr)).toBe(90);
//   });
//   const arr = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 7, 9];
//   test('test case 2', () => {
//     expect(bowling(arr)).toBeFalsy();
//   });
//
//
// describe('')
//
//
//
//
// calculate([10, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
//
// calculate([10, 10, 10, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 3, 2]);
describe('valid easy test cases', () => {
  test('test case 1 without any strike spare', () => {
    expect(bowling([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
  });

  test('test case 2 with 1 strike ', () => {
    expect(bowling([10, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(100);
  });
  test('test case 3 with 1 strike 1 spare ', () => {
    expect(bowling([10, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(100);
  });

  test('test case 4 with many strikes ', () => {
    expect(bowling([10, 3, 6, 3, 6, 3, 6, 3, 6, 10, 3, 6, 3, 6, 10, 3, 6])).toBe(120);
  });
});
