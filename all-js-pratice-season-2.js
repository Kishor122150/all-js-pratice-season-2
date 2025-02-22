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

// let obj={
//     name:prompt("enter your name"),
//     age:prompt("enter your age"),
// };
// let output=`my name is ${obj.name} and i am  ${obj.age} years old`
// console.log(output)
// orr 
// console.log("my nname is ",obj.name,"i am ",obj.age,"old")

// let name= prompt("enter your name")
// let age=prompt("enter your age")
// let obj={
//     name,
//     age,
// };
// let output=`my name is ${obj.name} and i am  ${obj.age} years old`
// console.log(output)
// console.log(output.length)

//string method in javascript
//str.touppercase
// let name="kishor";
// let newname=name.touppercase();
// console.log(newname)

//str.tolowercase
// let name="kishor"
// name=name.tolowercase();
// console.log(str)

//str.trim  =>removes white space
// let name="  kishor   "
// console.log(name.trim());
// console.log(name.length)

//str.slice  =>returns parts of string
// let str="kishor"
// console.log(str.slice(0,2))

//str.concat =>join 2 string
// let firstname="kishor";
// let lastname="raut";
// let final=firstname.concat(lastname)
// console.log(final)
// or 
// console.log(firstname+lastname)
// console.log(firstname,lastname)

// str.replace
// let name="kiswor"
// console.log(name.replace("w","h"))   //kishor

// let name="messy"
// console.log(name.replace("y","i"))

//str.charat  =>gives index value
// let str="ilovejs"
// console.log(str.charAt(5))        //5 index ma j xa

//wap to give new user name based on @ and length at last
// let fullname=prompt("enter the user name")
// let username="@"+fullname+fullname.length;
// console.log(username)

// let username=prompt("enter the user name");
// console.log("@"+username+username.length)


// array 
// let details=["kishor","20","2.2"]
// console.log(details)
// console.log(details.length)
// console.log(typeof(details))
// console.log(details[1])

//loop over an array
// let names=["kishor","kiran","kripa"]
// for(let i=0;i<=names.length;i++){
//     console.log(names[i])
// }

//using for of loop
// let names=["kishor","kiran","kripa"]
// for(let name of names){
//     console.log(name)
// }

//to print upper case
// let names=["kishor","kiran","kripa"]
// for(let name of names){
//     console.log(name.toUpperCase())
// }

// Qn) for a given array with marsks of studemt find the average of class 
// let marks=[85,97,44,37,76,60]
// let avg=((marks[0]+marks[1]+marks[2]+marks[3]+marks[4]+marks[5])/marks.length)
// console.log("average of class:"+ avg)

// or
// let marks=[80,97,44,37,76,60]
// let sum=0;
// for(let val of marks){
//     // sum=sum+val;
//     console.log(val)
// }
// let avg=sum/marks.length;
// console.log(`average of class is ${avg}`)

//qn) for given array with price of 5 items all items have 10% off .change the array and store final price after discount
//using for---of loop
// let i=0;
// let items=[250,645,300,900,50]
// for(let val of items){
//     console.log(`value at index ${i}=${val}`)
// let offer=val/10;
// items[i]=items[i]-offer;
// console.log(`value after offer=${items[i]}`)
// i++;
// }

//using for loop
// let items=[250,645,300,900,50]
// for(let i=0;i<=items.length;i++){
//     offer=items[i]/10;
//     items[i]=items[i]-offer;

// }
// console.log(items[i])

//array method

// 1)push =>add to end 
// let fruits=["appple","banana","mango"]
// fruits.push("orange")
// console.log(fruits)

// let names=["kishor","kiran","kripa"]
// names.push("GOMA","keshab")
// console.log(names)

//  2)pop =>remove ended and return 
// let names=["kishor","kiran","kripa"]
// let returnName =names.pop()
// console.log(names)
// console.log(returnName)
// or 
// console.log(names.pop())

// let names=["kishor","kiran","kripa","remove"]
// let removed=names.pop()
// console.log(names)
// console.log(removed)

// 3)tostring =>convert array into string
// let names=["kishor","kiran","kripa"]
// console.log(names)
// console.log(names.toString())

// let array=["apple","ball","cat"]
// console.log(array.toString)

// 4)concat => join multiply array and return its reasult 
// let firsthero=["ritik","salman"]
// let new1=["messi","ronaldo"]
// console.log(firsthero.concat(new1))

// let child=["kishor","kiran","kripa"]
// let parent=["goma","keshab"]
// family=child.concat(parent)
// console.log(family)

// 5)unshift =>add array to start 
// let family=["kishor","kiran","kripa"]
// family.unshift("goma")
// console.log(family)

// let players=['MESSI','RONALDO']
// players.unshift("neymar")
// console.log(players)

// 6)shift =>remove from start and return 
// let family=["remove","kishor","kiran","kripa"]
// let removed=family.shift()
// console.log(family)
// console.log(removed)

// 8)slice =>return a piece of array 
// let family=["kishor","kiran","kripa","goma","keshab"]
// console.log(family)
// console.log(family.slice(0,3))
// console.log(family.slice(0,2))

// 9) splice =>change orginal array (addEventListener,remove,replace)
// let arr=[1,2,3,4,5,6,7]
// arr.splice(2,2,101,102)
// console.log(arr)

//pratice
//create an array to story company data and remove first element and add other on it place
let companies=["bloombery","microsoft","uber","google","ibm","netflex"]
//for remove bloombery
companies.shift()
console.log(companies)
//for romove uber and add ola there =>replacement
companies.splice(1,1,"ola")
console.log(companies)
//add amazion end
companies.push("amazion")
console.log(companies)



