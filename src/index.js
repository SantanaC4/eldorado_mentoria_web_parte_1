import { getUser } from "./get-user";
alert("Hello from Webpack")

const meuCabecalho = document.getElementById('initial-text');
meuCabecalho.textContent = 'Github Profile Search';

const meuBotao = document.querySelector('button');
meuBotao.addEventListener("click", getUser);

var myImage = document.querySelector('img');
//test comment 