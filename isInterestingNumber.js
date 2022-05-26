function isInteresting(number, awesomePhrases) {
    let isInteresting = 0

    if (number + 2 < 100) return isInteresting
    awesomePhrases.forEach((el) => {
        switch (el) {
            case number:
                return isInteresting = 2
            case number + 1:
            case number + 2:
                return isInteresting = 1
        }
    })

    debugger

    function SearchZero(num) {
        for (let i = 0; i < 3; i++) {
            const arrNumber = (num + i).toString().split('')
            let zero = 0;
            arrNumber.forEach((el, index) => {
                if (index !== 0) {
                    el === '0' ? zero++ : ''
                }
            })
            if (arrNumber.length - 1 === zero && i === 0) isInteresting = 2
            if (arrNumber.length - 1 === zero && i > 0) isInteresting = 1
        }
    }


    SearchZero(number)
    if (number < 100 || isInteresting === 2) return isInteresting

    const numbers = "1234567890";
    const numbersRev = "9876543210";

    if (!(numbers.indexOf(String(number)) === -1 && numbersRev.indexOf(String(number)) === -1)) return 2

    if (!(numbers.indexOf(String(number + 1)) === -1 && numbersRev.indexOf(String(number + 1)) === -1)) return 1
    if (!(numbers.indexOf(String(number + 2)) === -1 && numbersRev.indexOf(String(number + 2)) === -1)) return 1

    if (String(number) === String(number).split('').reverse().join('')) return 2
    if (String(number + 1) === String(number + 1).split('').reverse().join('')) return 1
    if (String(number + 2) === String(number + 2).split('').reverse().join('')) return 1

    return isInteresting
}

console.log(isInteresting(100, [1337, 256]))
// console.log(isInteresting(1234, [1337, 256]))
// console.log(isInteresting(3210, [1337, 256]))
// console.log(isInteresting(7890, [1337, 256]))
// console.log(isInteresting(100, [1337, 256]))
//
// console.log(isInteresting(1336, [1337, 256]))
// console.log(isInteresting(1337, [1337, 256]))
// console.log(isInteresting(11208, [1337, 256]))
//
// console.log(isInteresting(11209, [1337, 256]))
// console.log(isInteresting(11211, [1337, 256]))
