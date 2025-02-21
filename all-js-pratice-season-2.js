// operator in js 
//artimetic operator
// let a=10;
// let b=27;
// sum=a+b;
// diff=a-b;
// mul=a*b;
// divv=a/b;
// console.log("sum of a+b is",sum);
// console.log("multiply of a*b is",mul);
// console.log("subtraction of a-b is",diff);
// console.log("division of a/b is",divv);

// let a=5;
// let b=10;
// a+=5;
// console.log(a)
// a-=2;
// console.log(a)

// comparasion operator 
// let a=5;
// let b=3;
// console.log("a==b is:",a==b) //false
// console.log("a!=b is:",a!=b) //true
// console.log(a>b)
// console.log(a<b)
// console.log(a<=b)
// console.log(a>=b)

//logical operator
// let a=20;
// let b=27;
// let cond1=a<b;
// let cond2=a!=20;
// console.log("cond1 and cond2 is",cond1 && cond2) //false
// console.log("cond1 or cond2 is ", cond1 || cond2) //true
// console.log(!cond1) //true=>false

//conditional statement

//if
// const mode="white";
// if(mode=="dark"){
//     console.log("color=black") ;

// }else if (mode=="white"){
//     console.log("color=white") ;
//  }
 
//if else
// let age=prompt("enter your age")
// if(age>=18){
//     console.log(alert("you are a voter"))

// }else{
//     console.log(("you are not"))
// }

//even or odd
// let number=prompt("enter a number")
// if(number%2===0){
//     console.log("the given number is even" )
// }else{
//     console.log("the given number is odd")
// }

// if-elseif
// let mode="white";
// let color;
// if(mode==="dark"){
//     document.write(color="black")
// }else if(mode==="white"){
//     document.write(color="white")
// }else{
//     document.write(color="red")

// }

// ternary operator
// syntax:condition?true output:false output;
// let age=20;
// let result= age>=18?"adult":"not adult";
// console.log(result)

// let age=18;
// age>=18?console.log("adult"):console.log("not adult");

// let name=prompt("hello")
// console.log(name)

//wap where the given number is multiply by or not 
// let num=prompt("enter the number")
// if(num%5===0){
//     console.log(num,"is multiple of 5")
// }else{
//     console.log(num,"is not multiples of 5")
// }

//wap which can gives grades to student according to score
// let score=prompt("enter the score between (1-100")
// let grade;
// if(score>=90 && score<=100){
//     grade="a"
// }
// else if(score>=70 && score<=89){
//     grade="b";
// }
// else if(score>=60 && score<=69){
//     grade="c";
// }
// else if(score>=50 && score<=59){
//     grade="d"
// }
// else if(score>=0 && score<=49){
//     grade="f"
// }
// console.log("your grade is ",grade)

// loops in js 
// priint name 10 times 
// for loop
// for(let i=1;i<=10;i++){
//     console.log(i+".hello world");
// }
// for(let count=1;count<=5;count++){
//     console.log("kishor")
// }
// calculate sum of 1 to 5 
// let sum =0;
// for(let i=1;i<=5;i++){
//     sum=sum+i;
//     console.log(i)
// }
// console.log(sum)

// multiply of 1 to 100
// let multiply=1;
// let sum=0;
// for(let i=1;i<=5;i++){
//     multiply=multiply*i;
// }
// console.log(multiply)
 
//while-loop
// let i=1;
// while(i<=10){
//     console,console.log(i);
//     i++;
    
// }

//do-while loop
// let i=1;
// do{
//     console.log("kishor");
//     i++;
// }while(i<=10)

// print number from 1 to 10
// let i=1;
// do{
//     console.log(i)
//     i++;
// } while(i<=10)

// for in loop
// let student={
//     name:"Kishor",
//     age:20,
//     gpa:7.5,
//     ispass:true,
// };
// for(let i in student){
//     console.log(i)
// }


// print all the even number foem 1 to 100;
// for(num=1;num<=100;num++){
//     if(num %2===0){
//         console.log(num)
//     }
// }

//created a game where you can assk user to start and gusssing the numbers untill its correct
// let gamenum=27;
// let usernum=prompt("enter the number");
// while(usernum!=gamenum){
//     usernum=prompt("you enter wrong number please enter again");
// }
// console.log(alert("cnogratulations"))
// or
// let gamenum=20;
// let usernum=prompt("enter the number")
// if(gamenum===usernum){
//     alert("correct number")
// }else{
//     alert("wrong number guess again")
// }

// or 

//string in js
// let name="kishor";
// console.log(name)

// string indices
// let name="kishor";
// console.log(name[0])

// templated literals in js 
// let str=`i am templated literals`
// console.log(str)
// console.log(typeof(str))

let obj={
    name:"kishor",
    age:20,
};
let output=`my name is ${obj.name} and i am  ${obj.age} years old`
console.log(output)
