/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let result = '';
    for(let i =0; i< command.length; i++){
        if(command[i] === 'G'){
            result += 'G'
        } else if(command[i] === '(' && command[i+1] === ')'){
            result += 'o';
            i++;
        } else if (command[i] === "(" && command[i + 1] === "a" &&
         command[i + 2] === "l" && command[i + 3] === ")"){
            result += 'al';
            i+=3
         }
    }
    return result
};