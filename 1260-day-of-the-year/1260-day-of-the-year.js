/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    const [year, month, day] = date.split('-').map(Number)
    const daysInMonths = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let daysOfYear = day;
    for(let i =0; i< month-1; i++){
        daysOfYear += daysInMonths[i]
    }

    return daysOfYear;
};

function isLeapYear(year){
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}

