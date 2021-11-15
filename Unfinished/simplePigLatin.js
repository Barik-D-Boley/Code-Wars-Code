/*  */
    // Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (/[a-zA-Z]/gm.test(arr[i])) arr[i] = `${arr[i].substring(1, arr[i].split('').length)}${arr[i].substring(0, 1)}ay`;
    }
    return arr.join(' ');
}
pigIt('Hello world !')