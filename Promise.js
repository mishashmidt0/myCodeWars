let promise = new Promise((res, rej) => {
    setTimeout(() => {
        res("ere")
    }, 3000)
    rej('123')
})

console.log(promise)

const axios = {
    get() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res({name: "Mikhail"})
            }, 3000)
        })
    }
}

axios.get().then(data => console.log(data))
    .then(data => console.log(data))


const fetch = (url) => {
    return new Promise((res, rej) => {
        switch (url) {
            case "google":
                return setTimeout(() => {
                    res({data: "google"})
                }, 2000)
            case "it-kamasutra":
                return setTimeout(() => {
                    res({data: "it-kamasutra"})
                }, 500)
            case "yandex":
                return setTimeout(() => {
                    res({data: "yandex"})
                }, 1000)
            default:
                res({data: "not found"})
        }
    })
}


fetch("google").then(res => console.log(res.data))
fetch("yandex").then(res => console.log(res.data))
fetch("it-kamasutra").then(res => console.log(res.data))

// полседовательный вызов
fetch("google").then(res => {
    console.log(res.data + " new")
    fetch("yandex").then(res => {
        console.log(res.data + " new")
        fetch("it-kamasutra").then(res => {
            console.log(res.data + " new")
        })
    })
})

// async / await

async function run() {
    const data = await fetch("google")
    console.log(data.data + " use async")

}

run()


function makeRequestAtTheOneMoment() {
    let p1 = fetch("google")
    let p2 = fetch("yandex")
    let p3 = fetch("it-kamasutra")
    let p = fetch("it")
    let p0 = Promise.reject("not found")

    Promise.all([p1, p2, p3])
        .then(res => {
            console.log(res)
        })

    Promise.allSettled([p1, p2, p3, p, p0])
        .then(res => {
            console.log(res)
        })


}

makeRequestAtTheOneMoment()