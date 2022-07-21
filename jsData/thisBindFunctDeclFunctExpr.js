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
user4.f()() // 2й вызов функции вызываеться сам по себе, после того как выполнился
// метод user4.f() который вернул функцию и эту функцию мы вызываем в шлоюальном обьекте this вернет undefined or window

// Лайвфак для сохранения this  мы можем заключить его в переменную !!!

const user3_3 = {
    name: "Anna",
    f() {
        let self = this;  // сохроняем this

        if (!!this) {
            if (!!this.name) console.warn(this.name)
        }

        function InnerF() {
            console.log("functionInnerF")
            console.log(self)
        }

        console.log(self)
        return InnerF   // возвращаем функция
    }

}
user4.f2 = user3_3.f
user4.f2()()

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  ()=> @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// отлияие
// у стрелочной функции нет своего this  и своего context
// нет  псевдо массива arguments
// нету обьекта prototype

console.dir(function () {
})
console.dir(() => {
})
console.warn("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ()=> @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
const arrow = () => {
    console.log(this)
}
arrow()

const pers = {name: "Niiki"}
pers.f = arrow
pers.f()

// this в стрелочной функции создаеться в моменте создание стрелочной функции, только один раз, в то время как декларатеон this создаеться всегда по мере вызова

// obj  не создает область видимости

const pers2 = {
    name: "Kolya",
    arrow: () => {
        console.log("Kolya arrow funct")
        console.log(this)
    }
}
pers2.arrow()

const pers3 = {name: "Pete"}

const obj2 = {
    name: "Ooi",
    arrow: () => {
        console.log(this)

        return function () {
            if (!!this) {
                if (!!this.name) console.warn(this.name)
            }
            console.log(this)
        }
    }
}

pers3.f = obj2.arrow()
pers3.f()


const pers4 = {name: "Pole"}
const obj3 = {
    name: "Ooi",
    f() {
        if (!!this) {
            if (!!this.name) console.warn(this.name)
        }
        console.log(this)
        return () => {
            console.log(this)
        }
    }
}

pers4.a = obj3.f()
pers4.a()

const obj4 = {
    name: "Uri",
    f() {
        setTimeout(() => {
            console.warn("()=>")
            console.log(this)
        }, 500)
        setTimeout(function () {
            console.warn("funct()")
            console.log(this)
        }, 500)
    }
}
obj4.f()

// Bind
const pers5 = {name: "Vladimir"}

function f1() {
    console.warn(this.name)
}

pers5.f = f1
// pers5.f()

f1.bind(pers5) // возвращает новую функцию с измененным контекстом (захардкоженным)
const BindedFunct = f1.bind(pers5)
BindedFunct()

const pers6 = {name: "Rick"}

function f2(a, b, c) {

    console.log(arguments)  // сохраняет все перкданные ей аргументы сначала сбинженные потом в самом аргументе
    console.log([...arguments].filter(e => e > 90))
    console.log([].filter.call(arguments, e => e > 100))
    console.log(this.name, a, b, c)
}

f2.bind(pers6, 100, 200, 300, 400)(111) // забинженные аргументы в функцию переда.ться раньше, чем момент вызова 111 не пройжет

//Call
f2.call(pers5, 50)
// Apply
f2.call(pers3, [30, 49, 22, 100, 200, 300])

// И call и apply  делают одно и то же отличаются только приявзкой аргументов