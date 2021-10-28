// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
  if ((pin.split('').length === 4) || (pin.split('').length === 6)) {
    let split = pin.split('')
    for (i = 0; i < pin.split('').length; i++) {
      if ((isNaN(split[i])) || (split[i] === ' ') || (split[i] === '\n')) {
        return false
      }
    }
    return true
  } else { return false }
}

validatePIN(`123
`)