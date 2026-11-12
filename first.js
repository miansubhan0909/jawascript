// starting of one short
console.log("hi");
console.log("hellow world");
console.log("IT is the one short of jawa script");
// variables
 fullname="subhan";
 age=20;
 cgpa=3.36;
 passport=null;
 job=undefined;
 ispass=true;
console.log(fullname);// string data type
console.log(age);// int data type
console.log(cgpa);// flaot data type
console.log(passport);// null data type// we know but its value is empty
console.log(job);// undefined data type// we dont know what is its value 
console.log(ispass);//boleian data type value is true or fasle
// jawascript is a dynamic type language for exapmle (dynamic means at the run time it has calculate the value of variables k wo kis data type k ha)
fullname=3000;
console.log(fullname);// now we change its value and its easily change
/* -- using var declare variable  disadvatages
var age =23;
var age =24;
var age=50;
console.log(age)  // the output is 50 as last change so it is the problem of var
*/
// let use to declared variable  its scope is block
//let age =20;
age=34; // again assign value is allow but redeclared not allow
//const its also scope is block
const fathername="khalid";// its value not change our not redeclared
// permtive and non premtive data types
const student = {
f_name: "subhan",     // key:value
cnic: 12344342343,
isalive: true
}
// prompt in js
// let phone_no=prompt("Enter your number")
// console.log("the no you enter from the prompt is ",phone_no);
// if (phone_no%5===0) {
//     console.log("it is the multiple of 5");
    
// } else {
//     console.log("no is not multiple of 5");
// }
// score cheaking
console.log("cheaking the grade by the input of user");
for(let i=1;i<50;i++)
{
    console.log("hellow !");
}
    console.log("loop is end !");
// while loop
let i=0
while (i<=10) {
    console.log(" college");
     i++;
}
// string indexing
let str="subhan";
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
console.log(str[5]);
// string slicing
let str1="pakistan";
console.log(str.slice(1,3))
let str2="Zindabad";

let nationlity=console.log(str.concat(str2))
nationlity=console.log(str1+str2);
// array
let marks=[12,13,14,15,16];
console.log(marks);
console.log(marks.length);
console.log(typeof(marks));
console.log(marks.slice(1,2))// slice(start value,end vlaue)
console.log(marks.splice(2,2,112,113))               
