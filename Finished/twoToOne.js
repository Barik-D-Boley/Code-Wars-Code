/* Finished October 29, 2021 */
    // Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

    // Examples:
    // a = "xyaabbbccccdefww"
    // b = "xxxxyyyyabklmopq"
    // longest(a, b) -> "abcdefklmopqwxy"

function longest(s1, s2) { // Join both strings, re-order it alphabetically, then only keep the letter once
    let str = (s1 + s2).split('').sort();
    for (i = 0; i < str.length; i++) {
        if ((str[i] == str[i-1]) || (str[i] == str[i+1])) {
            str.splice(i, 1);
            i--;
        }
    } 
    return str.join('');
}
longest('aaabcd', 'abcd');