/* Finished November 15th, 2021 */
    // In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.
    // Examples:
        // 'one' => 1
        // 'twenty' => 20
        // 'two hundred forty-six' => 246
        // 'seven hundred eighty-three thousand nine hundred and nineteen' => 783919

const indvWords = {
    ninety: 90,    nineteen: 19,    nine: 9,
    eighty: 80,    eighteen: 18,    eight: 8,
    seventy: 70,   seventeen: 17,   seven: 7,
    sixty: 60,     sixteen: 16,     six: 6,
    fifty: 50,     fifteen: 15,     five: 5,
    forty: 40,     fourteen: 14,    four: 4,
    thirty: 30,    thirteen: 13,    three: 3,
    twenty: 20,    twelve: 12,      two: 2,
    ten: 10,       eleven: 11,      one: 1,
                                    zero: 0
};

function parseInt(string) {
    string = string.toLowerCase().replace(/(\sand\s|[-])/g, ' ').replace(/[,]/g, '');

    if (string.includes('million')) return 1000000;

    const splitString = string.split(' ')

    function math(splitString) {
        return splitString.reduce((prev, word, i, words) => {
            if (word == 'thousand') return (prev = prev * 1000 + math(words.splice(i + 1)));
            else if (word == 'hundred') return prev *= 100;
            else return prev += indvWords[word];
        }, 0);
    }
    return math(splitString);
}
parseInt('seven hundred eighty-three thousand nine hundred and nineteen');