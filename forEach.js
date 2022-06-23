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
let group = new Array();
let assistants = new Array();


function getGroup(n) {
    student_data.forEach(student => {
        if (student.group == n) group.push(student.name) 
    });

    console.log("Members of "+ n + " is " + group)
}

function getAsistants (n) {

  student_data.forEach(student => {
    if (student.assistant == true) assistants.push(student.name) 
});

console.log("Assitants are " + assistants)
}

getGroup("AliceBlue");
getAsistants(student_data)
