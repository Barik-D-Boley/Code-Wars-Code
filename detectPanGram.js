/* Finished Oct 29, 2021 */
    // A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
    // Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

let joinedStr;
function longest(s1, s2) { // Join both strings, re-order it alphabetically, then only keep the letter once
    let str = (s1.toLowerCase() + s2.toLowerCase()).split('').sort();
    for (i = 0; i < str.length; i++) {
        if (/[^a-zA-Z]/.test(str[i])) {
            str.splice(i, 1);
            i--;
        } else if ((str[i] == str[i-1]) || (str[i] == str[i+1])) {
            str.splice(i, 1);
            i--;
        }
    } 
    joinedStr = str.join('');
}

function isPangram(string) {
    longest(string, string);
    if (joinedStr == 'abcdefghijklmnopqrstuvwxyz') {
        return true;
    } else {
        return false;
    }
}
isPangram('The quick brown fox jumps over the lazy dog.');