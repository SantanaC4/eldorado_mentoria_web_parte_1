"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putRepo = void 0;
function putRepo(data) {
    var listDiv = document.getElementById("list-rep");
    var ul = document.createElement('ul');
    for (var i = 0; i < data.length; ++i) {
        var li = document.createElement('li');
        li.innerHTML = data[i].name;
        ul.appendChild(li);
    }
    listDiv.appendChild(ul);
}
exports.putRepo = putRepo;
