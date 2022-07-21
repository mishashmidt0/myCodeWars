const func1 = (a) => +a + 1;
const func2 = (a) => +a + 1;
const func3 = (a) => +a + 1;
const func4 = (a) => +a + 1;

const addOne = (a) => +a + 1;
const multTwo = (b) => b * 2;

const compose = (...funcArr) => (...arg) => {
    let res = arg;
    funcArr.reverse().forEach((func) => {
        res = func(res);
    });
    return res;
};

const test = compose(func1, func2, func3, func4);
const test2 = compose(addOne, multTwo);

console.log(test(5));
console.log(test2(5));