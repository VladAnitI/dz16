import { api } from './modules/api.js'

let prod = []

const addProd = (prod) => {
    document.querySelector('.container').innerHTML += `<div class="elem"><img src="${prod.url}" alt="..."><h2>${prod.text}</h2><span>В наличие ${prod.num}.     </span><span>${prod.cost}$</span></div>`;
}

async function getProd() {
    prod = await api()
    prod.forEach((prod) => addProd(prod))
    console.log(prod)
}
getProd()

