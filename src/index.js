// alert("HI")
let virtual =  prompt("What is ur name", "Guest");
console.log(virtual)

// // console.log("Soham")

// //variables	
// // a= 45;
// // b= "soham";
// // c= 45;
// //operator(unary [-])
// // c= -c;
// // console.log(c)
// //binary operator
// // d= 54+100;
// // console.log(d)

// //arithmatic operator
// // var num1= 2;
// // var num2= 9;
// // console.log("This value is" +(num1 ** num2))
// // console.log("This is value" + (num1	++ ))
// // console.log("This is value" + (++ num1 ))

// // var string ="this small";
// // var string ='this is not small';
// // var name =" city";
// // console.log(string + name)
// //template
// // var temp = `pune is${name} and ${string}`;
// // console.log(temp)

// // var len = temp.length;
// // console.log(`length is ${len}`)


// // var x ='this is a string';
// // console.log(x)

// // innerHTML
// // document.getElementById('content').innerHTML= '<h3>this is an h3 heading</h3>'

//                           //string functions

// // var  str = 'on top of the world';
// // console.log(str)

// // var position = str.indexOf('o');
// // var position = str.lastIndexOf('o');
// // console.log(position)

// // var str = str.slice(0,9);
// // var str = str.substring(2,11);
// // var str = str.substr(5,9);
// // console.log(str)

// // var replaced = str.replace('world', 'universe');
// // console.log(replaced)
// // console.log(str.toUpperCase())
// // console.log(str.toLowerCase())


// // scope and conditions

// // var string = 'this is a string1';
// // var string = 'this is a string2';
// // console.log(string)


// // let a = 'so';
// // console.log(a)
// // {
// // 	let a = 'ham';
// // 	console.log(a)
// // }

// // const s ='this can"t be changed';
// // console.log(s)	

// // let age = 24;
// // if(age<20){
// // 	console.log("ok")
// // }
// // else if(age == 24){
// // 	console.log('perfect')
// // }
// // else
// // {
// //     console.log('no ')
// // }

// // let name =new Array(3, 1, 2, 'soham');
// // name.push("Sam");
// // name.sort();
// // console.log(name)

// // let names =new Array(23);
// // console.log(names)

// // function greet(name){
// // 	console.log(greetText + " " +name)
// // 	console.log(name + " is a good boy")	
// // }

// // let name = "Soham";
// // let name1 = "Sam";
// // let greetText ="good morning";
// // greet(name, greetText);
// // greet(name1, greetText);

// // function sum (a,b,c){
// //        let d = a + b + c;
// //        return d;
// //        console.log("kjhaskd")
// // }

// // let returnVal = sum(1, 2, 3);
// // console.log(returnVal)

// let deletePost = confirm("What is ur name");
// if( deletePost){
// 	console.log("It's k")
// else{
// 		console.log('What')
// 	}
// }

// let i = 0;
// for(i=0; i<3; i++){
// 	console.log(i)
// }

// let friends =["soham", "sam", "shubham"];
// for(let index=0; index < friends.lenght; index++){
// 	console.log("hello friends, " + friends[index])
// }
// let i=0;
// for(i=0; i<=3; i++){
// 	console.log(i)
// }

let friends = ["Sam", "Shubham", "Sudhir"];
// for(let i = 0; i<friends.length; i++){
// 	// let element = friends[i]
// 	console.log("Hello, " + friends[i])
// }

// forEach

// friends.forEach(function f(element){
// 	console.log("hello " + element)
// })

// for of

// for(element of friends){
// 	console.log(element)
// }

// let employee ={
// 	name : "soham",
// 	salary : 10,
// 	channel : "swat"	
// }

// for(key in employee){
// 	console.log(`the ${key} of employee ${employee[key]}`)
// }

// let z = 0;
// while(z<=5){
// 	console.log(`${z} is less than 4`)
// 	z++;
// }

// do{
// 	console.log(`${z} is less than 4`)
// 	z++;
// }while(z<=3)

// [[  let info = document.getElementById('soham');
// console.letog(info)

// let soham = document.getElementByClassName('soham');
// console.log(soham) ]]

 //[[    function toggleHide(){
	// let btn = document.getElementById('btn');
	// let para = document.getElementById('para');
	// para.style.display = 'none';   
    // let para = document.getElementById('para');
    // para.addEventListener('mouseover', function run(){
    // 	alert('mouse inside')
    // })   ]]

    console.log('this is a container')

    function greet(){
    	console.log('hello')
    }