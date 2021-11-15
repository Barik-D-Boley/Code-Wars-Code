/* Finished October 29, 2021 */
    // Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
    // moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let zeroCount = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            i--;
            zeroCount++;
        }
    }
    console.log(zeroCount);
    for (j = 0; j < zeroCount; j++) {
        arr.push(0);
    }
    return arr;
}
moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]);