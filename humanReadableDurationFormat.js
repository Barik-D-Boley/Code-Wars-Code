/*  */
    // Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

function formatDuration (seconds) {
    let arr = [];
    while (seconds > 0) {
        if (seconds >= 31536000) {
            seconds -= 31536000;
            arr.push('Year');
        } else if (seconds >= 86400) {
            seconds -= 86400;
            arr.push('Day');
        } else if (seconds >= 3600) {
            seconds -= 3600;
            arr.push('Hour');
        } else if (seconds >= 60) {
            seconds -= 60;
            arr.push('Minute');
        } else {
            seconds -= 1;
            arr.push('Second');
        }
    }
    console.log(`
        ${arr.filter(x => x === "Year").length} years, 
        ${arr.filter(x => x === "Day").length} days, 
        ${arr.filter(x => x === "Hour").length} hours, 
        ${arr.filter(x => x === "Minute").length} minutes, and 
        ${arr.filter(x => x === "Second").length} seconds.
    `);
}

formatDuration(9);
// formatDuration(99999);
// formatDuration(9999);
// formatDuration(99);
// formatDuration(9);