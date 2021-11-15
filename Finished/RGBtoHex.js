/* Finished November 15th, 2021 */
    // The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
    // Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
    // The following are examples of expected output values:
        // rgb(255, 255, 255) // returns FFFFFF
        // rgb(255, 255, 300) // returns FFFFFF
        // rgb(0,0,0) // returns 000000
        // rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b){
    let str = '';

    if (r > 255) str += 'ff';
    else if (r < 0) str += '00';
    else if (r < 16) str += `0${r.toString(16)}`;
    else str += r.toString(16);

    if (g > 255) str += 'ff';
    else if (g < 0) str += '00';
    else if (g < 16) str += `0${g.toString(16)}`;
    else str += g.toString(16);

    if (b > 255) str += 'ff';
    else if (b < 0) str += '00';
    else if (b < 16) str += `0${b.toString(16)}`;
    else str += b.toString(16);

    return str.toUpperCase();
}
rgb(293, 255, 255);