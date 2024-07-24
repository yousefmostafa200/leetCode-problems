/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
const sortJumbled = function (mapping, nums) {
    // Function to transform a number according to the mapping
    function getMappedValue(num) {
        return num
            .toString()
            .split('')
            .map((val) => mapping[val])
            .join('');
    }

    // Pair each original number with its mapped value and original index
    const mappedNums = nums.map((num, index) => ({
        num,
        mappedValue: getMappedValue(num),
        index,
    }));

    // Sort the array based on mappedValue and maintain the original order using index
    mappedNums.sort((a, b) => {
        if (a.mappedValue === b.mappedValue) {
            return a.index - b.index;
        } else {
            return a.mappedValue - b.mappedValue;
        }
    });

    return mappedNums.map((obj) => obj.num);
};