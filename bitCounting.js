/* Finished November 1, 2021 */
    // Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
    // Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
function countBits(n) {
    let bits = 0;
    let bitSplit = n.toString(2).split('');
    for (i = 0; i < bitSplit.length; i++) {
        if (bitSplit[i] == 1) {
            bits++;
        }
    }
    return bits;
}
countBits(1234);