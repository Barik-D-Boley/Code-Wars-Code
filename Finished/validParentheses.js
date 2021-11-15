/* Finished November 4th, 2021 */
    // Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

    // Examples
    // '()'              =>  true
    // ')(()))'          =>  false
    // '('               =>  false
    // '(())((()())())'  =>  true

function validParentheses(pars) {
    let split = pars.split('');
    let num = 0;
    for (i = 0; i < split.length; i++) {
        if (split[i] == '(') { num++; }
        else {
            num--;
            if (num < 0) { return false; }
        }
    }
    if (num === 0) {
        return true;
    } else { return false; }
}
validParentheses('))(');