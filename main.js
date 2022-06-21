import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Welcome to Kodluyoruz Student Filter Homework</h1>
  <h4>Please use the console to see the data </h4>
`
import axios from "axios";


// Importing data.json

async function getData() {

  let result = await axios("data.json").then(Response => Response)
 
  return result.data
  
}

// Creating new arrays for grouping

let student_data = await getData();
let group_1 = new Array();
let group_2 = new Array();
let group_3 = new Array();
let assistants = new Array();

// Adding students to their groups with the Switch Statement

function getGroups (n) {

  for (let i = 0; i < n.length; i++) {
   
    switch (n[i].group) {
      case "OrangeRed" :
        group_1.push(n[i]);
        break;

      case "AliceBlue" :
        group_2.push(n[i]);
        break;

      case "DeepPink" :
        group_3.push(n[i]);
        break;
        
      } 
    } 
    console.log(group_1);
    console.log(group_2);
    console.log(group_3);

}

// Creating another group for the asistants

function getAsistants (n) {

  for (let i = 0; i < n.length; i++) {

    if (n[i].assistant == true) {
      assistants.push(n[i]);
    
    } 
  } return console.log(assistants)
}

// Running the functions to print results to console

getGroups(student_data);
getAsistants(student_data);
