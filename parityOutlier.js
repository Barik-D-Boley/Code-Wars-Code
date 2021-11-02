/* Finished November 1st, 2021 */
    // You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

    // Examples
    // [2, 4, 0, 100, 4, 11, 2602, 36]
    // Should return: 11 (the only odd number)

    // [160, 3, 1719, 19, 11, 13, -21]
    // Should return: 160 (the only even number)
function findOutlier(integers) { // Check if there are more odds or evens in the first 3 numbers, then check all numbers for the outlier
    let arr = [];
    integers.forEach(num => {
        arr.push(Math.abs(num % 2));
    });
    console.log(integers, arr);
    for (i = 0; i < arr.length; i++) {
        if ((i == 0) && (arr[i] != arr[i+1]) && (arr[i] != arr[i+2])) {
            return integers[i];
        } else if ((i == arr.length - 1) && (arr[i] != arr[i-1])) {
            return integers[i];
        } else if ((i != 0) && (arr[i] != arr[i-1]) && (arr[i] != arr[i+1])) {
            return integers[i];
        }
    }
}
findOutlier([160, 5, 1718, 18, 10, 12, -20]);