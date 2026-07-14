const input_box = document.getElementById("input")
const one = document.getElementById("1")
const two = document.getElementById("2")
const three = document.getElementById("3")
const four = document.getElementById("4")
const five = document.getElementById("5")
const six = document.getElementById("6")
const seven = document.getElementById("7")
const eight = document.getElementById("8")
const nine = document.getElementById("9")
const zero = document.getElementById("0")
const plus = document.getElementById("+")
const minus = document.getElementById("minus")
const divide = document.getElementById("divide")
const multiply = document.getElementById("multi")
const equal = document.getElementById("equal")
const dot = document.getElementById(".")
const percent = document.getElementById("percent")
const all_clear = document.getElementById("all_clear")
const clear = document.getElementById("clear")

 

function getResult(equation){
    try {
        if(equation.includes("%")){
            equation = equation.replace(/(\d+(?:\.\d+)?)%/g, (_, num) => Number(num) / 100);            
        }
        return Function(`return (${equation})`)();        
    } catch (error) {
        return "Invalid Value!"
    }    
}

equal.addEventListener('click', ()=>{
    const to_solve = input_box.value
    const answer = getResult(to_solve)
    input_box.value = answer
    if(answer !== "Invalid Value!"){
        let new1 = `<div class="section">
            <div class="h_answer">${answer}</div>
            <div class="h_equation">${to_solve}</div>
        </div>`
        document.querySelector(".sections").innerHTML += new1
    }
})

one.addEventListener('click', ()=>{
    input_box.value += "1"
})
two.addEventListener('click', ()=>{
    input_box.value += "2"
})
three.addEventListener('click', ()=>{
    input_box.value += "3"
})
four.addEventListener('click', ()=>{
    input_box.value += "4"
})
five.addEventListener('click', ()=>{
    input_box.value += "5"
})
six.addEventListener('click', ()=>{
    input_box.value += "6"
})
seven.addEventListener('click', ()=>{
    input_box.value += "7"
})
eight.addEventListener('click', ()=>{
    input_box.value += "8"
})
nine.addEventListener('click', ()=>{
    input_box.value += "9"
})
zero.addEventListener('click', ()=>{
    input_box.value += "0"
})
plus.addEventListener('click', ()=>{
    input_box.value += "+"
})
minus.addEventListener('click', ()=>{
    input_box.value += "-"
})
divide.addEventListener('click', ()=>{
    input_box.value += "/"
})
multiply.addEventListener('click', ()=>{
    input_box.value += "*"
})
percent.addEventListener('click', ()=>{
    input_box.value += "%"
})
dot.addEventListener('click', ()=>{
    input_box.value += "."
})
clear.addEventListener('click', ()=>{
    let str = input_box.value
    input_box.value = str.slice(0,-1)
})
all_clear.addEventListener('click', ()=>{
    input_box.value = ""
})
input_box.addEventListener('keydown', (e)=>{
    if(e.key == 'Enter'){
        const to_solve = input_box.value
        const answer = getResult(to_solve)
        input_box.value = answer
        if(answer !== "Invalid Value!"){
            let new1 = `<div class="section">
                <div class="h_answer">${answer}</div>
                <div class="h_equation">${to_solve}</div>
            </div>`
            document.querySelector(".sections").innerHTML += new1
        }
    }
    else if(e.key == "Delete"){
        input_box.value = ""
    }
})
const answer = document.querySelector(".answer");

input_box.addEventListener("input", (event) => {
    const expression = event.target.value;
    answer.innerHTML = getResult(expression)
});

Array.from(document.getElementsByTagName("button")).forEach(btn=>{
    btn.addEventListener('click', ()=>{
        const expression = input_box.value;
        answer.innerHTML = getResult(expression)
    })
})

const svg = document.querySelector(".svg_sun")
document.querySelector(".theme").addEventListener('click', ()=>{
    const swap_circle = document.querySelector(".swap")
    if(swap_circle.style.right == "4px"){
        swap_circle.style.right = "45px"
        
        svg.src = "moon.svg"  
        document.querySelector(".sun").style.left = "46px"
        document.querySelector(".theme").style.backgroundColor = "black"
        document.querySelector(".swap").style.backgroundColor = "white"
        document.body.style.backgroundColor = "rgb(200 200 200 / 29%)"
        document.querySelector(".bg").style.background = "rgb(236 253 255)"
        document.querySelector(".bg").style.boxShadow = "0 0 12px 3px #00000059"
        document.documentElement.style.setProperty('--black', 'white')
        document.querySelectorAll(".digit").forEach((num)=>{
            num.style.backgroundImage = "linear-gradient(white, white)"
        })
        document.querySelectorAll(".number").forEach(all=>{
            all.style.boxShadow = "rgb(0 0 0 / 20%) 0px 0px 4px 5px"
        })
        document.querySelector(".preview").style.boxShadow = "0 0 4px 5px #bfbebe78"
        document.querySelector(".history").style.backgroundColor = "rgb(236 253 255)"
        document.querySelector(".heading").style.color = "#0184e1"
        document.querySelector(".his_icon").style.filter = "invert(1)"
        document.querySelector("#close").style.filter = "invert(1)"
        document.querySelectorAll(".section").forEach((sec)=>{
            sec.style.backgroundColor = "#ffe922"
        })
        
        
        
    }
    else{
        swap_circle.style.right = "4px"
        svg.src = "sun.svg"  
        document.querySelector(".sun").style.left = "13px"
        document.querySelector(".theme").style.backgroundColor = "white"
        document.querySelector(".swap").style.backgroundColor = "black"
        document.body.style.backgroundColor = "black"
        document.querySelector(".bg").style.background = "linear-gradient(180deg,#1d1d26,#0f1015)"
        document.querySelector(".bg").style.boxShadow = "none"
        document.documentElement.style.setProperty('--black', 'rgb(97,97,97)')
        document.querySelectorAll(".digit").forEach((num)=>{
            num.style.backgroundImage = "linear-gradient(white, rgb(214, 214, 214))"
        })
        document.querySelectorAll(".number").forEach(all=>{
            all.style.boxShadow = "0 0 4px 5px #00000078"            
        })
        document.querySelector(".preview").style.boxShadow = "0 0 4px 5px #00000078"
        document.querySelector(".history").style.backgroundColor = "rgb(26, 26, 26)"
        document.querySelector(".heading").style.color = "yellow"
        document.querySelector(".his_icon").style.filter = "invert(0)"
        document.querySelector("#close").style.filter = "invert(0)"
        document.querySelectorAll(".section").forEach((sec)=>{
            sec.style.backgroundColor = "#ffffff"
        })
        
    }
})

document.querySelector(".his_icon").addEventListener('click', ()=>{
    document.querySelector(".history").style.left = "0"
    
})

document.getElementById("close").addEventListener('click', ()=>{
    document.querySelector(".history").style.left = "-250px"
    
})