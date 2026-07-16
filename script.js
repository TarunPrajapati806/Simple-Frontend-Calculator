const input_box = document.getElementById("input")
const equal = document.getElementById("equal")
const all_clear = document.getElementById("all_clear")
const clear = document.getElementById("clear")
const answer = document.querySelector(".answer");

function toGetLatest(){    
    document.querySelectorAll(".section").forEach(sec=>{
        sec.addEventListener('click', ()=>{ 
        const main = sec.querySelector(".h_answer").innerHTML
        const express = sec.querySelector(".h_equation").innerHTML
        input_box.value = express
        answer.innerHTML = main
        })
    })
}

function getResult(equation) {
    try {
        if (equation.includes("%")) {
            equation = equation.replace(/(\d+(?:\.\d+)?)%/g, (_, num) => Number(num) / 100);
        }
        return Function(`return (${equation})`)();
    } catch (error) {
        return "Invalid Value!"
    }
}

equal.addEventListener('click', () => {
    const to_solve = input_box.value
    const answer = getResult(to_solve)    
    input_box.value = answer
    if (answer !== "Invalid Value!") {
        let new1 = `<div class="section">
            <div class="h_answer">${answer}</div>
            <div class="h_equation">${to_solve}</div>
        </div>`
        document.querySelector(".sections").innerHTML += new1
    }
    toGetLatest()
})

document.querySelectorAll(".btn").forEach(b => {
    b.addEventListener('click', ()=>{
        const val = b.dataset.value        
        input_box.value += val
    })
})

clear.addEventListener('click', () => {
    let str = input_box.value
    input_box.value = str.slice(0, -1)
})

all_clear.addEventListener('click', () => {
    input_box.value = ""
})

input_box.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        const to_solve = input_box.value
        const answer = getResult(to_solve)
        input_box.value = answer
        if (answer !== "Invalid Value!") {
            let new1 = `<div class="section">
                <div class="h_answer">${answer}</div>
                <div class="h_equation">${to_solve}</div>
            </div>`
            document.querySelector(".sections").innerHTML += new1
        }
    }
    else if (e.key == "Delete") {
        input_box.value = ""
    }
    toGetLatest()
})

input_box.addEventListener("input", (event) => {
    const expression = event.target.value;
    answer.innerHTML = getResult(expression)
});

Array.from(document.getElementsByTagName("button")).forEach(btn => {
    btn.addEventListener('click', () => {
        const expression = input_box.value;
        answer.innerHTML = getResult(expression)
    })
})

const svg = document.querySelector(".svg_sun")
document.querySelector(".theme").addEventListener('click', () => {
    const swap_circle = document.querySelector(".swap")
    if (swap_circle.style.right == "4px") {
        swap_circle.style.right = "45px"

        svg.src = "svgs\\moon.svg"
        document.querySelector(".sun").style.left = "46px"
        document.querySelector(".theme").style.backgroundColor = "black"
        document.querySelector(".swap").style.backgroundColor = "white"
        document.body.style.backgroundColor = "rgb(200 200 200 / 29%)"
        document.querySelector(".bg").style.background = "white"
        document.querySelector(".bg").style.boxShadow = "0 0 12px 3px #00000059"
        document.documentElement.style.setProperty('--black', 'white')
        document.querySelectorAll(".digit").forEach((num) => {
            num.style.backgroundImage = "linear-gradient(white, white)"
        })
        document.querySelectorAll(".number").forEach(all => {
            all.style.boxShadow = "rgb(0 0 0 / 20%) 0px 0px 4px 5px"
        })
        document.querySelector(".preview").style.boxShadow = "0 0 4px 5px #bfbebe78"
        document.querySelector(".history").style.backgroundColor = "rgb(236 253 255)"
        document.querySelector(".heading").style.color = "#0184e1"
        document.querySelector(".his_icon").style.filter = "invert(1)"
        document.querySelector("#close").style.filter = "invert(1)"
        document.querySelectorAll(".section").forEach((sec) => {
            sec.style.backgroundColor = "#ffe922"
        })



    }
    else {
        swap_circle.style.right = "4px"
        svg.src = "svgs\\sun.svg"
        document.querySelector(".sun").style.left = "13px"
        document.querySelector(".theme").style.backgroundColor = "white"
        document.querySelector(".swap").style.backgroundColor = "black"
        document.body.style.backgroundColor = "black"
        document.querySelector(".bg").style.background = "linear-gradient(180deg,#1d1d26,#0f1015)"
        document.querySelector(".bg").style.boxShadow = "none"
        document.documentElement.style.setProperty('--black', 'rgb(97,97,97)')
        document.querySelectorAll(".digit").forEach((num) => {
            num.style.backgroundImage = "linear-gradient(white, rgb(214, 214, 214))"
        })
        document.querySelectorAll(".number").forEach(all => {
            all.style.boxShadow = "0 0 4px 5px #00000078"
        })
        document.querySelector(".preview").style.boxShadow = "0 0 4px 5px #00000078"
        document.querySelector(".history").style.backgroundColor = "rgb(26, 26, 26)"
        document.querySelector(".heading").style.color = "yellow"
        document.querySelector(".his_icon").style.filter = "invert(0)"
        document.querySelector("#close").style.filter = "invert(0)"
        document.querySelectorAll(".section").forEach((sec) => {
            sec.style.backgroundColor = "#ffffff"
        })

    }
})

document.querySelector(".his_icon").addEventListener('click', () => {
    document.querySelector(".history").style.left = "0"

})

document.getElementById("close").addEventListener('click', () => {
    document.querySelector(".history").style.left = "-250px"

})
