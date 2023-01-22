import { firstName, lastName, age, gender, email, password } from "./library.js"

document.getElementById("demo").innerHTML = `Your name is ${firstName} ${lastName}, you are ${age} years old, your gender is ${gender} , your email is ${email} and your password is ${password}`;


var  youMarks = (name, ...marks) => {
    let totalMarks = 0;
    for(let i in marks){
        totalMarks += marks[i];
    }
    return document.getElementById("demo1").innerHTML = `Your name is ${name}, you have ${totalMarks} marks.`;
}
let marks = [10, 20, 30, 40];
var fullName = `${firstName} ${lastName}`;
youMarks(fullName, ...marks);