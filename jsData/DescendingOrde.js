function descendingOrder(n) {
    return Number(n.toString().split("").sort((a, b) => b - a).join(""))

}

console.log(descendingOrder(1021))
console.log(descendingOrder(0))
console.log(descendingOrder(1))
console.log(descendingOrder(11))
console.log(descendingOrder(111))
console.log(descendingOrder(15))