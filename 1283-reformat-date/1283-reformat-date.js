/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
    const monthMap = {
        "Jan": "01",
        "Feb": "02",
        "Mar": "03",
        "Apr": "04",
        "May": "05",
        "Jun": "06",
        "Jul": "07",
        "Aug": "08",
        "Sep": "09",
        "Oct": "10",
        "Nov": "11",
        "Dec": "12"
    };

    const [dayWithSuffix, month, year] = date.split(' ');

    const day = dayWithSuffix.slice(0, -2).padStart(2, '0');

    const monthNumber = monthMap[month];


    return `${year}-${monthNumber}-${day}`;
};