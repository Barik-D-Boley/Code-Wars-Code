/* Finished Oct 29, 2021 */
    // Given: an array containing hashes of names
    // Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

    // Example:
    // list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
    // // returns 'Bart, Lisa & Maggie'
    // list([ {name: 'Bart'}, {name: 'Lisa'} ])
    // // returns 'Bart & Lisa'
    // list([ {name: 'Bart'} ])
    // // returns 'Bart'
    // list([])
    // // returns ''

function list(names){
    let str = '';
    for (i = 0; i < names.length; i++) {
        if (i == 0) {
            str = names[i].name;
        }
        else if (i < names.length-1){
        str = `${str}, ${names[i].name}`
        } else{
            str = `${str} & ${names[i].name}`
        }
    }
    return str;
}
list([ {name: 'Bart'}, {name: 'Lisa'} ]);