function positiveSum(arr) {
    if (arr.length === 0) return 0
    return arr.filter(el => el > 0).reduce((initItem, item) => initItem + item)
}

console.log(positiveSum([-1, 2, 3, 4, -5]))