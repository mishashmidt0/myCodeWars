const select = document.querySelector(".select")
const ul = document.querySelector("ul")

const dataSelect = ["none", 1, 2, 3, 4]

let isOpen = false

select.addEventListener("click", function () {
    isOpen ? isOpen = false : isOpen = true
    moveSelect(isOpen)
})

function changeSelectName(el){
    if(el === "none") {
        select.innerHTML = "select"
    }
    select.innerHTML = el.toString()
    isOpen = false
    moveSelect(isOpen)
    return isOpen
}

function moveSelect(isOpen) {
    isOpen ? dataSelect.forEach((el, index) => {
        const li = document.createElement('li')

        li.addEventListener("click", function () {
           return  changeSelectName(el)
        })

        li.innerText = el.toString()
        li.classList.add('select_li')
        ul.appendChild(li)
    }) : ul.innerHTML = ""
}




