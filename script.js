// "use strict"
console.log("this: " + this)

function f() {
    console.log("Function Declaration")
    console.log(this)
}

f() // не создает свою область видимости  // undefined or window

let user = {name: "Mikhail"}

user.f = f;// создает область видимости this и являеться обьктом
user.f();

const user2 = {
    name: "Maks",
    f() {
        if (!!this) {
            if (!!this.name) console.warn(this.name)
        }

        function InnerF() {
            console.log("functionInnerF")
            console.log(this)
        }

        InnerF()   // так как функция вызываеться сама и this не передаеться через замыкание. this будет равен  undefined or window
        console.log(this)
    }
}
user2.f()

const globalVariable = user2.f
globalVariable()  // undefined or window


const user3 = {
    name: "Elena",
}
user3.innerObj = {name: "InnerName"}
user3.innerObj.f = user2.f;
user3.innerObj.f(); // this будет являться ближайшим обьктом

// this не передаеться через замыкание
const user3_2 = {
    name: "Anna",
    f() {
        if (!!this) {
            if (!!this.name) console.warn(this.name)
        }

        function InnerF() {
            console.log("functionInnerF")
            console.log(this)
        }

        console.log(this)
        return InnerF   // возвращаем функция
    }

}

const user4 = {name: "Viktor"}
user4.f = user3_2.f
user4.f()()