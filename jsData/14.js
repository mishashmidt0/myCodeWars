// JS_14

function test(name, age) {
    return {
        name, age,
        sumeFunct() {
            let a = 12
        }
    }
}

const user = test("Misha", 24)
const user2 = test("Andry", 25)

//sumeFunct создаеться для каждого user что не очень хорошо для оперативки лишнии действия

// Function constructor

function Test(name, age) {
    this.name = name;
    this.age = age; // без return это функция вернет обьект
}

const user3 = new Test("Anna", 19)
console.log(user3)
console.log(user3)


function Test2(name, age) {
    this.name = name;
    this.age = age;
    return [10]   // если в return указан обычный примитив то return его игнорирует и возвращает обьект
}

const user4 = new Test2("Anna", 19)
console.log(user4)


function Test3(name, age) {
    this.name = name;
    this.age = age;
}

Test.prototype.someFunct = function () {   // создали одну функцию для каждого обьекта
}

const user5 = new Test3("Anna", 19)
console.log(user5)


class Test4 {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    someFunction() {
        console.log(this)
    }

}

const user6 = new Test4("Misha", 24)
user6.someFunction()

// модификаторы доступности




















