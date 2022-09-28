import { getUser } from "./get-user";
alert("Hello from Webpack")

const meuCabecalho = document.getElementById('initial-text');
meuCabecalho.textContent = 'Github Profile Search';

const myButton = document.querySelector('button');
const gitUser = document.querySelector('input')

myButton.addEventListener("click", getUser(gitUser.value));

let myImage = document.querySelector('img');


//test comment