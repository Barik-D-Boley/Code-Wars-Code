/* Finished Oct 29, 2021 */
    // Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

    // Examples:
    // solution('abc') // should return ['ab', 'c_']
    // solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str){
    let arr = str.match(/.{1,2}/g);
    if (arr == null) {
        return [];
    } else if (arr[arr.length - 1].split('').length == 1) {
        arr[arr.length - 1] = arr[arr.length - 1] + '_';
    }
    return arr;
}
solution('');