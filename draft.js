/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  function numberToArray(n) {
    const numbers = [];
    let t = n;
    for (let i = 0; n > 0; i += 1) {
      if (t < 1) break;
      const r = t % 10;
      numbers.unshift(r);
      t = (t - r) / 10;
    }
    return numbers;
  }

  const a = numberToArray(number);
  const limit = new Array(a.length).fill(9);
  let n = number;

  function isValidDigits(numberToTest) {
    const baseArr = [...a];
    const arrayToTest = numberToArray(numberToTest);

    for (let i = 0; i < arrayToTest.length; i += 1) {
      const index = baseArr.indexOf(arrayToTest[i]);
      if (index === -1) return false;
      baseArr.splice(index, 1);
    }
    return baseArr.length === 0;
  }

  while (n <= limit) {
    n += 1;
    if (isValidDigits(n)) return n;
  }

  return number;
}

/*

 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113

*/
const i = 12345;
const r = getNearestBigger(12345);
console.log(r);
