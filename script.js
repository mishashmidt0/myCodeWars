// function sumOfSquares(n) {
//     const arr = []
//
//     function recurse(n, first) {
//         let sqrt = Math.sqrt(n)
//         let del = Math.sqrt(n / 2)
//         while ((sqrt % 2).toString().length !== 1 && (del % 2).toString().length !== 1) {
//             n = n - 1
//             sqrt = Math.sqrt(n)
//             del = Math.sqrt(n / 2)
//         }
//         (sqrt % 2).toString().length === 1 ? arr.push(sqrt) : arr.push(del, del)
//         let number = 0
//         arr.forEach((el) => {
//             number += el * el
//         })
//         if (first - number === 0) return arr.length
//         return recurse(first - number, first)
//     }
//
//
//     return recurse(n, n)
//
// }

function sumOfSquares2(n) {
    const arr = []
    debugger

    function recurse(n, first) {
        let number = n
        let del = Math.sqrt(2)

        if (del.toString().length === 1) {
            number = del
            arr.push(del)
        }

        while (number !== 1) {
            number = number / 2
            del = Math.sqrt(number)

            if (del.toString().length === 1) {
                number = del
                arr.push(del)
            } else {
                arr.push(2)
            }
        }
        return number
    }


    return recurse(n, n)

}


console.log(sumOfSquares2(2704))
// console.log(sumOfSquares(1008))
// console.log(sumOfSquares(16))
// console.log(sumOfSquares(18))
// console.log(sumOfSquares(661915703))

