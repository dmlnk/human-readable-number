module.exports = function toReadable (number) {

    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tys = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const decimals = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen','eighteen', 'nineteen'];
    
    if (number < 10) {
        return numbers[number];
    }
    
    if (10 <= number && number < 100 ) {
        if (10 <= number && number < 20 ) return decimals[number % 10];
        if (number%10 == 0) return `${tys[Math.floor(number / 10) - 2]}`;
        return `${tys[Math.floor(number / 10)-2]} ${numbers[number % 10]}`;
    }

    if(100 <= number && number < 1000) {
        if(number % 100 == 0) return `${numbers[Math.floor(number / 100)]} hundred`;
        return `${numbers[Math.floor(number / 100)]} hundred ${toReadable(number % 100)}`;
    }
}
