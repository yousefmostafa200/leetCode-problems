/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
   const visit = new Set();

    const sumOfSquares = (num) => {
        let sum = 0;
        while (num > 0) {
            let digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    while (n !== 1 && !visit.has(n)) {
        visit.add(n);
        n = sumOfSquares(n);
    }

    return n === 1;
};
