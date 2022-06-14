function XO(str) {
    let x = 0, o = 0
    str.toLowerCase().split("").forEach(el => {
        if (el === "x") x++
        if (el === "o") o++
    })
    if (x === o) return true
    return false
}

function XO2(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}

console.log(XO('xxOo'))