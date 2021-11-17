/*  */
    // In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120
    // Your mission is simple: write a function that takes an integer n and returns the value of n!.
    // You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! = "15511210043330985984000000" as a string.

function factorial(n) { // Read the first number, add it to a string, then subtract that number times Math.pow(10, *the number at the end of the e*)
    let ans = 1;
    let limit = n;
    let arr = [];
    for (let i = 0; i < limit; i++) {
        ans *= n;
        n--;
    }

    if (ans < 100000000000000000000) {
        return ans.toString();
    } else {
        console.log(ans);
        for (let i = ans.toString().split('e+')[1]; i > 0; i--) {
            if (ans.toString().split('e+')[1] != i) {
                arr.push('0');
                console.log(ans);
            } else {
                arr.push(ans.toString().slice(0, 1));
                ans -= (ans.toString().slice(0, 1) * Math.pow(10, i));
                console.log(ans);
            }
        }
    }
    if (arr.join('') == 4789142901463393876335775239063022722176295591337767174070096339929153381622433264146569329274347655956110484372311586936020749175429076661003216274382475477806479918110524333880196139452687559896255940215628508414806740389616633144934400000000000000000000000000000000000000) {
        console.log('Success');
    } else {
        console.log('Fail');
    }
    console.log('Answer - 4789142901463393876335775239063022722176295591337767174070096339929153381622433264146569329274347655956110484372311586936020749175429076661003216274382475477806479918110524333880196139452687559896255940215628508414806740389616633144934400000000000000000000000000000000000000');
    return arr.join('');
}

factorial(155);