bonus = function (arr, s) {
    let sum = 0;
    const res = []
    arr.forEach((el) => {
        sum += 1 / el
    })
    arr.forEach((el) => {
        res.push(Math.round(s / sum / el))
    })

    return res
}

bonus([18, 15, 12], 851) // [230, 276, 345]
