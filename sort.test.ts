import { merge } from '../primo/sort';
 //Test function merge
describe('testing sort file', () => {
  test('merge [2,1] and [3,5] Equal [1,2,3,5]', () => {
    expect(merge([2,1],[3,5])).toStrictEqual([1,2,3,5]);
  });
  test('merge [3, 2, 1, 5, 4,8,5] and [32,6,3,45,5,3,4] Equal [1,  2, 3, 3, 3, 4, 4, 5, 5, 5, 6, 8, 32, 45]', () => {
    expect(merge([3, 2, 1, 5, 4,8,5],[32,6,3,45,5,3,4])).toStrictEqual([1,  2, 3, 3, 3, 4, 4, 5, 5, 5, 6, 8, 32, 45]);
  });
});