/* Finished November 3rd, 2021 */
    // You need to write regex that will validate a password to make sure it meets the following criteria:
        // At least six characters long
        // contains a lowercase letter
        // contains an uppercase letter
        // contains a number
        // Valid passwords will only be alphanumeric characters.

function validate(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password);
}
validate('Pa1');