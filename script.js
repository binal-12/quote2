

let clientWidth = document.documentElement.clientWidth
let width = (((clientWidth-300)*50)/clientWidth).toFixed(2);

const body = document.getElementById("body");

const cont1 = body.children[0];
const cont2 = body.children[1];

cont1.style.width = String(width) + "vw";
cont2.style.width = String(width) + "vw"

let today = new Date().toUTCString().split(" ")
const dt = document.getElementsByClassName("date")[0].children[0]
dt.textContent = today[1] + " " + today[2] + ", " + today[3]

let quote,auth;

const qh2 = document.getElementsByClassName("quote")[0].children[0]
const ah2 = document.getElementsByClassName("author")[0].children[0]

const gradients = [
    ["linear-gradient(#9796F0, #FBC7D4)"],
    ["linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"],
    ["linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)"],
    ["linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)"],
    ["linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)"],
    ["linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)"],
    ["linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)"],
    ["linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)"],
    ["linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)"],
    ["linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)"],

]

    
async function fetchData() {
    const rand = Math.floor(Math.random() * 1643)
    const resp = await  fetch('https://type.fit/api/quotes');
    const data = await resp.json();
    return data;
}

const addData = (quote, auth) => {
    qh2.textContent = "\"" + quote + "\"";
    ah2.textContent = auth
}

async function onClick() {
    const rand = Math.floor(Math.random() * 1643)
    await fetchData()
        .then(data => {
            const {text, author} = data[rand];
            quote = text
            auth = author
        } )

    addData(quote, auth);
}

onClick()

const main = document.getElementById("main");

main.addEventListener("click", onClick)


let count = 0;
cont1.addEventListener('click', () => {
    if(count == 0){
        count = gradients.length-1
    }else{
        count--
    }
    body.style.background = gradients[count]
})

cont2.addEventListener('click', () => {
    if(count == gradients.length-1){
        count = 0
    }else{
        count++
    }
    body.style.background = gradients[count]
})