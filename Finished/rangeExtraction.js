/* Finished November 3rd, 2021 */
    // A format for expressing an ordered list of integers is to use a comma separated list of either:
        // individual integers
        // or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
    // Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

    // Example:
    // solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
    // returns "-6, -3-1, 3-5, 7-11, 14, 15, 17-20"

function solution(list) {
    let str = '';
    let exNum = 0;
    for (i = 0; i < list.length; i++) {
        if ((list[i] != list[i-2] + 2) && (list[i] != list[i+2] - 2) && ((list[i] != list[i-1] + 1) || (list[i] != list[i+1] - 1))) {
            if (i == list.length - 1) {
                str += list[i];
                break;
            }
            str += list[i] + ',';
        } else {
            for (j = 0; j < list.length; j++) {
                if ((list[i] != list[i+j] - j) || (i+j == list.length)) {
                    if (i+j == list.length) {
                        exNum = j - 1;
                        str += `${list[i]}-${list[i+j-1]}`;
                        break;
                    }
                    exNum = j - 1;
                    str += `${list[i]}-${list[i+j-1]},`;
                    break;
                }
            }
            i += exNum; 
        }
    }
    return str;
}
solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20, 22]);