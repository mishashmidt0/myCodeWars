function squareDigits(num) {
    return Number(num.toString().split("").map(el => el ** 2).join(""))
}

console.log(squareDigits(9119))