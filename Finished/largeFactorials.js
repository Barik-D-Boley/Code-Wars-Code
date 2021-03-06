/* Finished November 19, 2021 */
    // In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120
    // Your mission is simple: write a function that takes an integer n and returns the value of n!.
    // You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! = "15511210043330985984000000" as a string.

function factorial(n)  {
    if (!n) return '1'
    let i, next, power;
    const result = n.toString().split``.reverse().map(Number);

    while (--n) {
        i = power = 0;
        while ((next = result[i++]) !== undefined || power) {
            power += (n * (next || 0));
            result[i-1] = power % 10;
            power = parseInt(power / 10);
        }
    }

    return result.reverse().join``;
};
factorial(155);