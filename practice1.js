// 1 var let const
/* {
  let x = 5;
  var y = 7;
}
console.log(y); */

//2 template string
/* const student = {
    id:1,
    name:'pieash ahmed',
    class :'Ten',
}
const x = 5;
const text =`my name is ${student.name} & i read in class ${student.class} and i have ${x} ball`;
console.log(text); */

//3.1 arrow function
/* const divide = number =>number/5;
console.log(divide(10)); */
//3.2
// const sumMulti = (n1,n2) => (n1+2)*(n2+2);
// console.log(sumMulti(2,2));
//3.3
/* const multi = (n1,n2,n3)=> n1*n2*n3;
console.log(multi(10,20,30)); */
//3.4
/* const sumMulti = (n1,n2)=> {
    const sum1 = n1+2;
    const sum2 = n2+2;
    return sum1*sum2;
}
console.log(sumMulti(3,3)); */

//5 map . multi by 5
/* const numbers = [1, 2, 3, 4, 5];
const multiBy5 = numbers.map((number) => number * 5);
console.log(multiBy5); */

//6 find odd number from array
/* const numbers = [4, 6, 7, 9, 12, 45, 33, 42];
const oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log(oddNumbers); */

//7 find price from array.. object

/* const product = [
  { name: "laptop", price: 45000 },
  { name: "watch", price: 5000 },
];
const price5k = product.find((item) => item.price === 5000);
console.log(price5k); */

// 7.5 map, forEach, filter, find
/* 
 map: map diye array er prottek element ke dhre dhre nidristo kaj kra jay sohoje and new array return kre
 forEach: prottek element of array er value ke dhre kaj kora jay kintu kono value return kore na.
 filter: nidristo coonditon er mdhe joto gulo value pawa jabe sob value kei return korbe array akare
 find: conditon er  hisabe je value ke pabe tar prothm ekti value ke return krbe sudhu.
*/

//8 destructuring of object
/* 
const student ={
    piesah: {
        name: 'pieash Ahmed',
        id: 12,
        district: 'dhaka',
    },
}
const {piesah:{name}}= student;
console.log(name); */

// 9 destructuring

/* const fruits = ['apple','banana','mango','orange'];
const [one,two,three]=fruits
console.log(three); */

//10 reduce

/* const sum = (n1,n2,n3=7)=> {
    return n1+n2+n3;
}
console.log(sum(1,2)); */

//11 ,12
/* const student ={
    piesah: {
        name: 'pieash Ahmed',
        id: 12,
        district: 'dhaka',
        marks:[56,66,77,88]
    },
}
const marks = student.piesah.marks[3]
console.log(marks); */
