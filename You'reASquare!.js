var isSquare = function (n) {

    console.log(Math.sqrt(n) % 2)

    if (n === 0 || (Math.sqrt(n) % 2) === 1 || (Math.sqrt(n) % 2) === 0) return true
    return false
}

console.log(isSquare(25))
console.log(isSquare(4))
console.log(isSquare(81))
console.log(isSquare(26))
