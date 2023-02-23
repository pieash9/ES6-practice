//1 let const var

const { current } = require("tailwindcss/colors");

/* var name = 'pieash';
var name = 'hasan';
name = 'khan' */
/* let name = 'pieash';
 name = 'khan'
 const name2 = 'pieash2';
    name2 = 'lemin';
console.log(name2); */

//2 local global block
/* const a=5;
{
    const a=2;
    console.log(a);
}
console.log(a); */

//3 template string

/* const name = 'pieash';
const age = 22;
const job = 'bekar';

const sentence = `Amar nam ${name}
amar boyosh ${age}
ami ${job} ekhn.`;
console.log(sentence); */

//4 ternary operator

/* const isStudent = true;
// let  message = "";
// if (isStudent === true) {
//   message = "Ho ami student";
// } else {
//   message = "porte vallge na";
// }
let  message = "";
message = (isStudent === true) ? 'ami student vai' : 'porte vallge na';
console.log(message); */

//5 array spreading

/* const number = [2, 4, 1, 9, 3, 5, 26, 7];
const number2 = [32, 45, 67];
// console.log(Math.min(...number));
// console.log([12,13,14,5,...number2,99,89]);

const array1 = [1, 2, 3, 4, 5];
const array2 = [...array1];
array1.push(99);
array2.push(55);
// console.log(array1);
// console.log(array2);
 */
//6 destructuring array

/* const array = [1, 2, 3, 4, 5, 6, 7];
const [first,second,...remaining] = array;
console.log(first,second,remaining); */

//7 destructuring object

/* const person1 = {
  name: "Hero Alom",
  age: 34,
  phone: "039945924",
  address: "bari nai",
  p: [1, 2, 3, 4],
};
const {p} = person1;
const[number] = p;
console.log(number);
const person2 = {...person1};
// person2.isMale = true;
// console.log(person1);
const {address:bariKoi,name,...badBakiJinish}=person1;
// console.log(name,bariKoi,badBakiJinish);  */

//8 object accessing
/* 
const Person = {
    name: 'abul',
    age: 23,
    contact: {
        phone: '09432723',
        email: "abul@gmail.com"
    },
    education: {
        schoolName: "andorkilla high school",
        subjects: [
            { name: 'bangla', mark: 45 },
            { name: 'english', mark: 64 },
            { name: 'math', mark: 74 }
        ]
    }
}
console.log(Person.education.subjects[1].mark);
// const age = Person['age'];
// const propertyAge = 'age';
// const age = Person[propertyAge]
// console.log(age); */

//9 optional chaining

/* const petOwner = {
  name: "Jolonto Kholil",
  contact: {
    phone: "09376253",
    email: "xyz@gmail.com",
  },
  pet: {
    name: "Lofie",
    info: {
      color: "black",
      weight: "1.2kg",
    },
  },
};
// console.log(petOwner.pet.name);
console.log(petOwner.dog?.name);
console.log('pieash'); */

// 10 default parameter

/* function add(n1=3,n2=5){
    return n1+n2;
}
console.log(add(12,13)); */

//11 arrow function

/* show()
function show(){
    // console.log('show function');
}

const add =  function(){
    // console.log('pieash');
}
add()

const multi = (n1,n2)=> n1*n2;
// console.log(multi(7,8));

const showName = name => console.log(name);
showName('pieash')
const hello = ()=> console.log('hello world');
hello() */

//11 forEach map

/* const numbers = [12,23,34,45,56,67];
const numberResult = numbers.map((number,index,a )=>{
    console.log(number,index,a);
}) */
// for(const n of numbers){
// console.log(n);
// }
// numbers.forEach(number=> console.log(number))
// numbers.map(number => console.log(number));
// const newArr = numbers.map(number => number);
// console.log(newArr);

//12 find filter
/* 
const numbers = [12, 32, 25, 75, 13, 54, 97, 25];

const result1 = numbers.find(number => number >=50);
const result = numbers.filter(number => number >50)
console.log(result); */

//1 problem solving scic te chance pabe kina

/* const students = [
  {
    name: "mehedy bro",
    email: "mehedy@gamil.com",
    avg: 56,
    fiftyPercent: true,
  },
  { name: "rokib bro", email: "rokib@gamil.com", avg: 57, fiftyPercent: false },
  { name: "sakib bro", email: "sakib@gamil.com", avg: 42, fiftyPercent: false },
  { name: "sojib bro", email: "sojib@gamil.com", avg: 52, fiftyPercent: true },
  { name: "sunny bro", email: "sunny@gamil.com", avg: 32, fiftyPercent: false },
  { name: "saki bro", email: "sunny@gamil.com", avg: 37, fiftyPercent: true },
  {
    name: "jackie bro",
    email: "jackie@gamil.com",
    avg: 57,
    fiftyPercent: true,
  },
];

const scic = students.filter((s) => s.avg >= 50 && s.fiftyPercent === true);
const names = scic.map((s) => s.name);
console.log(names); */

//2 problem solving pola khoja

/* const polapain = [
  { Name: "Abul", job: "sorkari", salary: 17000 },
  { Name: "Babul", job: "besorkari", salary: 25000 },
  { Name: "Kabul", job: "sorkari", salary: 21000 },
  { Name: "Habul", job: "besorkari", salary: 47000 },
  { Name: "Jabul", job: "sorkari", salary: 23000 },
  { Name: "Mabul", job: "besorkari", salary: 55000 },
];

const jamais = polapain.filter(
  (pola) =>
    (pola.job == "sorkari" && pola.salary >= 20000) ||
    (pola.job == "besorkari" && pola.salary >= 40000)
);
console.log(jamais);
 */

//problem 3 convert to single object

/* const Persons = [
    { id: 'ID01', name: "abul vai", age: 23 },
    { id: 'ID02', name: "babul vai", age: 43 },
    { id: 'ID03', name: "habul vai", age: 54 },
    { id: 'ID04', name: "jabul vai", age: 29 }
]

// console.log(Persons[1].name);
const info = {};
// info['name']='pieash';
// info['age'] = 23;
// console.log(info);

 Persons.map(p=>{
    const id=p.id;
    const value = p.name;
    info[id]=value;
})
console.log(info.ID02); */

//problem 4 API access
const Students = [
  {
    student1: {
      name: "abul",
      age: "17",
      isMale: true,
      education: {
        className: 7,
        subjects: ["bangla", "english", "math"],
        school: "durgapur high school",
      },
    },
    student2: {
      name: "jarina",
      age: "19",
      isMale: false,
      education: {
        className: 6,
        subjects: ["bangla", "english", "math"],
        school: "Rajshahi high school",
      },
    },
    student3: {
      name: "habul",
      age: "15",
      isMale: true,
      education: {
        className: 9,
        subjects: ["bangla", "english", "math"],
        school: "Dhaka high school",
      },
    },
  },
];

// expected output
/**
 *          My Name is abul.
            My age is 17.
            My gender is Male
            My subjects are: bangla,english,math
 * 
 */

Students.map((student) => {
  for (let i in student) {
    const { name, age, isMale, education } = student[i];
    const { subjects } = education;
    const { school, className } = education;

    const information = `
                    My name is ${name}
                    My age is ${age}
                    My gender is ${isMale === true ? "Male" : "Female"}
                    My subjects are ${subjects.map((subject) => subject)}
                    My school name is ${school}
                    My class name is ${className}
                    `;
    // console.log(information);
  }
});

// const nameList = {
//     name : 'pieash',
//     age : 23,
//     address : 'dhaka',
// }
// for(let item in nameList){
//     console.log(nameList[item]);
// }

//13 array reduce

/* const numbers = [1, 2, 3, 4, 5];
// let sum=0;
// for(let i of numbers){
//     sum +=i;
// }
// console.log(sum);
const sum = numbers.reduce((current, previous) => current * previous, 1);
console.log(sum);
 */

//14 class

/* class Student {
    name = 'pieash';
    age = 23;
}

const student1 = new Student();
console.log(student1.name); */
/* 
class Student {
    name;
    roll;
    constructor(name,roll){
        this.name = name;
        this.roll = roll;
    }
    showDetails(){
        console.log(`My name is ${this.name}. My roll is ${this.roll}`);
    }
}

const student1 = new Student('pieash',12);
const student2 = new Student('khan',52)
student1.showDetails();
student2.showDetails(); */

//15 class inheritance

class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  }
}

class Student extends Person{

  subject;
  roll;
  constructor(name, age, subject, roll) {
    super(name,age);
    this.subject = subject;
    this.roll = roll;
  }
  showDetails(){
    console.log(this.name,this.age, this.subject, this.roll);
  }
}

class Teacher extends Person{

    faculty;
    designation;
    constructor(name, age, faculty, designation) {
      super(name,age);
      this.faculty = faculty;
      this.designation = designation;
    }
    showDetails(){
        console.log(this.name, this.age , this.faculty, this.designation);
    }
}

const student1 = new Student('pieash',23,'CSE',1305);
const teacher1 = new Teacher ('Nur e Alom',33,'EEE',3451)
student1.showDetails()
teacher1.showDetails()