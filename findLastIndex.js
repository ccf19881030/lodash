import baseFindIndex from './.internal/baseFindIndex.js';
import toInteger from './toInteger.js';

/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeMax = Math.max;
const nativeMin = Math.min;

/**
 * This method is like `findIndex` except that it iterates over elements
 * of `collection` from right to left.
 *
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 *
 * findLastIndex(users, function(o) { return o.user == 'pebbles'; });
 * // => 2
 */
function findLastIndex(array, predicate, fromIndex) {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  let index = length - 1;
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex);
    index = fromIndex < 0
      ? nativeMax(length + index, 0)
      : nativeMin(index, length - 1);
  }
  return baseFindIndex(array, predicate, index, true);
}

export default findLastIndex;
