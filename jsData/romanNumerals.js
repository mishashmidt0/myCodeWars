class RomanNumeralsClass {
    store = []

    toRoman(number) {
        if (number < 0 || number > 4000 || number === 0) return "error"

        const recurse = (number, store, roman = "") => {

            const {value: largest, numerals} = store.shift();

            const quotient = Math.floor(number / largest)

            roman = `${roman}${numerals.repeat(quotient)}`;

            const remainder = number % largest;
            return remainder === 0 ? roman : recurse(remainder, store, roman);
        }


        this.store = [
            {value: 1000, numerals: 'M'},
            {value: 900, numerals: 'CM'},
            {value: 500, numerals: 'D'},
            {value: 400, numerals: 'CD'},
            {value: 100, numerals: 'C'},
            {value: 90, numerals: 'XC'},
            {value: 50, numerals: 'L'},
            {value: 40, numerals: 'XL'},
            {value: 10, numerals: 'X'},
            {value: 9, numerals: 'IX'},
            {value: 5, numerals: 'V'},
            {value: 4, numerals: 'IV'},
            {value: 1, numerals: 'I'},
        ]
        return recurse(number, this.store)
    }

    fromRoman(str) {
        const recurse = (str, store, deRoman = 0) => {

            const {value: largest, numerals} = store.shift();
            const regexp = new RegExp(`^${numerals}`);
            while (regexp.test(str)) {
                deRoman += largest;
                str = str.replace(numerals, "")
            }
            return str.length === 0 ? deRoman : recurse(str, store, deRoman);
        }
        this.store = [
            {value: 1000, numerals: 'M'},
            {value: 900, numerals: 'CM'},
            {value: 500, numerals: 'D'},
            {value: 400, numerals: 'CD'},
            {value: 100, numerals: 'C'},
            {value: 90, numerals: 'XC'},
            {value: 50, numerals: 'L'},
            {value: 40, numerals: 'XL'},
            {value: 10, numerals: 'X'},
            {value: 9, numerals: 'IX'},
            {value: 5, numerals: 'V'},
            {value: 4, numerals: 'IV'},
            {value: 1, numerals: 'I'},
        ]
        return recurse(str, this.store)
    }
}


const RomanNumerals = new RomanNumeralsClass()

console.log(RomanNumerals.toRoman(1000))
console.log(RomanNumerals.toRoman(4))
console.log(RomanNumerals.toRoman(1))
console.log(RomanNumerals.toRoman(1990))
console.log(RomanNumerals.toRoman(2008))

console.log(RomanNumerals.fromRoman('XXI'))
console.log(RomanNumerals.fromRoman('I'))
console.log(RomanNumerals.fromRoman('IV'))
console.log(RomanNumerals.fromRoman('MMVIII'))
console.log(RomanNumerals.fromRoman('MDCLXVI'))

