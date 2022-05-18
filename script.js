function validateBattlefield(field) {
    let number = 0;
    let objShip = {}
    field.forEach((arr, indexArr) => {
        let arrShip = []
        arr.forEach((el, indexEl) => {
            if (el === 1) number++
            if (el === 1) arrShip.push(indexEl)
            objShip[indexArr] = arrShip
        })
    })
    if (number !== 20) return false

    let verticalShip = {}
    let horizontallyShip = {}
    let arrAllVertical = []

    function findVertical(elFind) {
        let isDone = true
        let ship = {};
        let arrShip = []
        for (let key in objShip) {
            let arrValue = objShip[key]
            if (arrValue.indexOf(elFind) !== -1) {
                arrShip.push(key)
            }
            ship[elFind] = arrShip

        }
        arrAllVertical.forEach((obj) => {
            if (Object.keys(obj)[0] === Object.keys(ship)[0]) {
                isDone = false
            }
        })
        if (isDone) arrAllVertical.push(ship)
    }

    for (let key in objShip) {
        let value = objShip[key]
        value.forEach((el) => {
            findVertical(el)
        })
    }

    function findVerticalShip(data) {
        data.forEach((obj) => {
            for (let key in obj) {
                let arrShip = []
                let arr = obj[key]
                let filter = 'first'

                for (let i = 0; i < arr.length; i++) {
                    let next = i + 1;
                    let el = +i
                    let pred = i - 1;
                    if (i !== 0) filter = 'ost'
                    if (i === arr.length) filter = 'end'
                    // debugger

                    switch (filter) {
                        case 'first' :
                            if ((arr[next] - arr[el]) === 1) {
                                arrShip.push(+arr[el])
                            }
                            break
                        case 'end' :
                            next = next - 2;
                            if ((arr[el] - arr[next]) === 1) {
                                arrShip.push(+arr[el])
                            }
                            break
                        default :
                            if ((arr[next] - arr[el]) === 1) {
                                arrShip.push(+arr[el])
                            } else if ((arr[next] - arr[el]) !== 1 && (arr[el] - arr[pred]) === 1) {
                                arrShip.push(+arr[el])
                            }
                    }

                }
                if (arrShip.length >= 1) verticalShip[key] = arrShip
            }

        })

    }

    findVerticalShip(arrAllVertical)


    function findHorizontal(obj) {
        for (let key in obj) {
            let arrShip = []
            let arr = obj[key]
            let filter = 'first'

            for (let i = 0; i < arr.length; i++) {
                let next = i + 1;
                let el = +i
                let pred = i - 1;
                if (i !== 0) filter = 'ost'
                if (i === arr.length - 1) filter = 'end'

                // debugger
                switch (filter) {
                    case 'first' :
                        if ((arr[next] - arr[el]) === 1) {
                            arrShip.push(+arr[el])
                        }
                        break
                    case 'end' :
                        next = next - 2;
                        if ((arr[el] - arr[next]) === 1) {
                            arrShip.push(+arr[el])
                        }
                        break
                    default :
                        if ((arr[next] - arr[el]) === 1) {
                            arrShip.push(+arr[el])
                        } else if ((arr[next] - arr[el]) !== 1 && (arr[el] - arr[pred]) === 1) {
                            arrShip.push(+arr[el])
                        }
                }

            }
            if (arrShip.length >= 1) horizontallyShip[key] = arrShip
        }

    }

    findHorizontal(objShip)

    let fourShip = [];
    let treeShip = [];
    let twoShip = [];
    let oneShip = [];

    function destructuringShip(ship, coordinates) {
        for (let key in ship) {
            let arr = ship[key]

            switch (arr.length) {
                case 4:
                    fourShip = [{'line': coordinates, 'base': +key, 'coordinates': [...arr]}]
                    break
                case 3:
                    treeShip.push({'line': coordinates, 'base': +key, 'coordinates': [...arr]})
                    break
                case 2:
                    twoShip.push({'line': coordinates, 'base': +key, 'coordinates': [...arr]})
                    break
                case 1:
                    oneShip.push({'line': coordinates, 'base': +key, 'coordinates': [...arr]})
                    break
                default:
                    break
            }
        }
    }

    destructuringShip(verticalShip, 'vertical')
    destructuringShip(horizontallyShip, 'horizontally')

    let newObjShip = {...objShip}

    function findOneShip(data, ship) {

        ship.forEach((obj) => {
            switch (obj.line) {
                case 'vertical':

                    obj.coordinates.forEach((el) => {
                        newObjShip = {
                            ...newObjShip,
                            [el]: newObjShip[el].filter((element) => element !== obj.base)
                        }
                    })
                    break
                case 'horizontally':

                    obj.coordinates.forEach((el) => {
                        newObjShip = {
                            ...newObjShip,
                            [obj.base]: newObjShip[obj.base].filter((element) => element !== el)
                        }
                    })

                    break
                default:
                    break
            }
        })


    }

    findOneShip(objShip, fourShip)
    findOneShip(objShip, treeShip)
    findOneShip(objShip, twoShip)

    function destructuringOneShip(ship) {

        for (let key in ship) {
            let arr = ship[key]
            if (arr.length > 0) {
                oneShip.push({'line': 'vertical', 'base': +key, 'coordinates': [...arr]})
            }

        }

    }

    destructuringOneShip(newObjShip)

    let allShipDestructuring = {
        fourShip,
        treeShip,
        twoShip,
        oneShip
    }

    if (fourShip.length !== 1) return false
    if (treeShip.length !== 2) return false
    if (twoShip.length !== 3) return false
    if (oneShip.length !== 4) return false

    console.log(field)
    console.log(allShipDestructuring)
    return true
}

console.log(validateBattlefield([[1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]))
