function numberChecking(number) {
    if (number > 10) {
        return "sok"
    }
    if (number < 0) {
        return 0
    }
    if (number % 1 !== 0 ) {
        return Math.floor(number)
    }
    return number

}

module.exports = numberChecking