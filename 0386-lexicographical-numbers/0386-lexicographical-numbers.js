/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
    let res = [];
    let cur = 1;
    for (let i = 0; i < n; i++) {
        res.push(cur);
        if (cur * 10 <= n) {
            cur *= 10;
        } else {
            if (cur >= n) {
                cur = Math.floor(cur / 10)
            }
            cur++;

            while (cur % 10 === 0) {
                cur = Math.floor(cur / 10)

            }

        }
    }

    return res
};