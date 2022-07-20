
import studentData from "./data.json";
import Card from "../Card/Card";
import style from "./Students.module.scss";
import React from "react";

const DATA = () => {

let groupNames = studentData.reduce((result, item) => {
  result[item.group] = [] 
  return result;
}, {}) ;

 Object.keys(groupNames).forEach(group => {
  let findStudents = studentData.filter(student => student.group === group && student.assistant === false);
  groupNames[group] = findStudents;
}) 

 let assistants = studentData.filter(student => student.assistant);

assistants = assistants.map(assistants => {
  return {
    ...assistants,
  }
});
  console.log(groupNames);
  console.log(assistants);


  return (
    <React.Fragment>
      <div id = "0" className={style.asistants}>
      {assistants.map(
        assistant => <Card key = {assistant.id} name = {assistant.name} group = {assistant.group} />
      )} 
      </div>
    <div id = "1" className={style.students}>
      {groupNames["AliceBlue"].map(
        studentAliceBlue => <Card key = {studentAliceBlue.id} name = {studentAliceBlue.name} group = {studentAliceBlue.group} />
      )}
      </div>
      <div id = "2" className={style.students}>
      {groupNames["OrangeRed"].map(
        studentOrangeRed => <Card key = {studentOrangeRed.id} name = {studentOrangeRed.name} group = {studentOrangeRed.group} />
      )}
      </div>
      <div id = "3" className={style.students}>
      {groupNames["DeepPink"].map(
        studentDeepPink => <Card key = {studentDeepPink.id} name = {studentDeepPink.name} group = {studentDeepPink.group} />
      )}
    </div>
    </React.Fragment>
  )
}

export default DATA;
