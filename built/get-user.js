"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
var put_repo_1 = require("./put-repo");
function getUser(gitUser) {
    console.log(gitUser);
    document.getElementById('list-rep').innerHTML = '';
    fetch("https://api.github.com/users/".concat(gitUser)) //Search for github user 
        .then(function (response) {
        return response.json(); //Converting the response to a JSON object
    })
        .then(function (data) {
        if (data.message) {
            console.log('User Profile Not Found');
        }
        else {
            console.log(data);
            document.getElementById('res').innerHTML = "".concat(data.name);
        }
        return fetch("https://api.github.com/users/".concat(gitUser, "/repos")); // Search for Repositories
    })
        .then(function (response) {
        return response.json(); //Converting the response to a JSON object
    })
        .then(function (data) {
        console.log(data);
        document.getElementById('rep').innerHTML = (0, put_repo_1.putRepo)(data); // Display repositories list
    })
        .catch(function (error) {
        console.log(error);
    });
}
exports.getUser = getUser;
