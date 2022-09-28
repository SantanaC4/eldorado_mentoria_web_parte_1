"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_user_1 = require("./get-user");
alert("Hello from Webpack");
var meuCabecalho = document.getElementById('initial-text');
meuCabecalho.textContent = 'Github Profile Search';
var myButton = document.querySelector('button');
var gitUser = document.querySelector('input');
myButton.addEventListener("click", (0, get_user_1.getUser)(gitUser.value));
var myImage = document.querySelector('img');
//test comment
