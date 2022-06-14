function sumTwoSmallestNumbers(numbers) {
    numbers.sort((a, b) => a - b)
    return numbers[0] + numbers[1]
}

console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]))