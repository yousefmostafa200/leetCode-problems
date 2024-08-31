/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    const d1 = new Date(date1)
    const d2 = new Date(date2)

    const millis = Math.abs(d2-d1)
    return Math.floor(millis / (1000*60*60*24))
   
};