import { putRepo } from "./put-repo";

export function getUser() {  
    document.getElementById('list-rep').innerHTML = '';
    var gitUser = document.querySelector('input')
    fetch(`https://api.github.com/users/${gitUser.value}`)  //Search for github user 
    .then(response => {
      return response.json() //Converting the response to a JSON object
    }) 
    .then(function(data) {
      if(data.message){
          console.log('User Profile Not Found')
      }else{
          console.log(data)
          document.getElementById('res').innerHTML = `${data.name}`
      }
      return fetch(`https://api.github.com/users/${gitUser.value}/repos`) // Search for Repositories
    })
    .then(response => {
      return response.json()  //Converting the response to a JSON object
    })
    .then(data =>{
          console.log(data)
          document.getElementById('rep').innerHTML = putRepo(data) // Display repositories list
    })
    
    
    .catch(function(error) {
      console.log(error)
    });
}