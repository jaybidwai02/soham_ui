// document.write('bidwai<br>'+'soham<br>'+'soham'+' bids');

//var name='soham bids';       //here name is variable.
//document.write("hello "+name);   //by using name(variable). display 'sohambids'.

//window.alert("Hi \nname");       //alert fuction

//X2 = "soham ";
//document.write("bidwai "+X2) 

//soham_name = "sam";              // variable name as underscore( _ )
//document.write("hello "+soham_name);

//$ = "soahm";                     // variable name as dollar ( $ )      
//document.write("vaibhav "+ $ );

//const name = "soham";
//document.write("sameer "+name);

var $ = " sandip";
//document.write(" hello "+$);

x= 5;
x= x+10;
//document.write(x);

var $, carName = ' swift', age = 25;    //one statement, many variables.
document.write(age,carName,$+ "<br>");          //re-declaration ( $ ) is used here.

soham_bidwai = 5 + 6 + '9';
document.write(soham_bidwai + "<br>");

var ans = true;                         // Boolean value.
// document.write(ans + "<br>");

var abc = true;
console.log(abc
            +" Soham");
var abc;
console.log(abc);

var car = "JIO";
//document.write(car);

a = 5;
c = "sham";
b = a**10;              //Exponentiation Operator ( ** ).
document.write(b+"<br>");
//d = a % c;
//document.write(d);      // Modulus operator.

// e = a %=c;
//  document.write(e);


var a = 10;
var e = 10;
var f = a===e;
document.write(f+"<br>");

//d = a === c;              // equal value and equal type operator.
//document.write(d);

d = a !== c;              //not equal value and not equal type operator.
//document.write(d);

f = 10;
g = f+7;                  // increment by a specific value.
//document.write(g+"<br>");

h = 10>5;
t = 10>11;
//z = !h;                 // logical operator NOT
z = h && t;             // logical operator AND
//z = h || t;               // logical operator OR
//document.write(z +"<br>");

d = 5;
e = 6;
// w = d & e;
w = d | e;             
//document.write(w);

s = 20;
p = 10;
s =s+15;                 //#22 bitwise operator
//s = s<<p;
document.write(s + "<br>");

                        /* #24 Getting input from user prompt() method*/

var a = prompt("Enter Value: ", "123456");
document.write(a);
//var a = prompt("Enter your value: ", "123456");
window.alert("Hi");
                       /* #27 If else statement */
/*var a = 10;
if(a == 10)
    document.write("you enterd a correct value: "+a);
else
   document.write("your enterd value is wrong: "+a);*/

                       /* #28 Else if statement */
/*var a = 15;
if (a <=10)
    document.write("fail");
else if (a >=15)
    document.write("pass");
else
    document.write("WTH");*/

                          /* #29 Swicth case statement */
/* var day = 4;
switch(day){
     case 1:
     document.write("Sunday");
     break;
     case 2:
     document.write("monday");
     break;
     case 3:
     document.write("Tuesday");
     break;
     default:
     document.write("Saturday");
} */ 

                        /* #30 for loop */
var i = 0;
/*for( ; i<5; i++)
{
    document.write(i + "<br>");
}
document.write('bidwai'); */

/*for( ; i<5; )
{
    i++;
    document.write(i + "<br>");
}*/

/*for( ; ;i++)
{
    if(i==3)
    {
        break;
    }
    document.write(i + "<br>");
}
document.write('bidwai'); */

                            /*#31 nested for loop */
/*for(i=0; i<3; i++)
{
    document.write('bidwai' + '<br>');
    for(j=0; j<5; j++)
    {
        document.write('Soham' + '<br>');
    }
}*/

                            /*#32 while loop*/
/*var i = 0;
while(i<5)
{ 

    document.write(i + '<br>');
    i++;
    if(i<3)
        document.write(i + "Soham" + '<br>');
}   */
                            /* #33 Nestedd while loop*/
var x =0;
while(x<3)
{
    document.write("Outer loop" + x);
    x++;
    document.write("<br>");
    var y=0
    while(y<5)
    {
        document.write("Inner looop" + y);
        y++;
        document.write("<br>");
    }
} 
                                /* #34 Do while loop*/
/*var o =0;
do
{
    document.write("Soham" + "<br>");
    o++
}while(o<5) */

                        /*Function in java*/
                        /*How to create call function in java */ 
var j = myfunction(5, 3);
document.write(j);

function myfunction(a, b) {
     return a * b;
}

/*var j = myfunction(4, 3);  //Accessing a function without () will return the function OBJECT instead of the function RESULT.
document.write(myfunction);                

function myfunction(a, b) {
     return a * b;
}*/

var j = myfunction(4, 3);
document.write("<br>" + "soham " + myfunction(4,3) + " Bidwai");
        //function can be used as a variable value [myfunction()] 
// function myfunction(a, b) {
//      return a + b;
// }

function display(a, b=70)
{
    document.write("<br>" + a + " Soham " + b + "<br>");
}
display(60);

                    //display arguments without declared parameters.
                    //display arguments without declared parameters.
function disp()
{
    for (var i = 0; i<arguments.length; i++) {
         document.write(arguments[i]+ " " + "<br>");
    }
}
disp("soham", "vjay", "bids");
//#42
/*function s_bids(name1, name2)
{
    for(var i = 0; i<arguments.length; i++)
    {
        document.write(arguments[i] + " ");     
    }
   
}
s_bids("soham ", "Jay "); */

//#43
    /*function j_bid(a, b){
    document.write("A: "+ a + " B: " + b);
    document.write(" C: "+ arguments[2]+ " D: "+ arguments[3]);
}
j_bid(25, 50, 75, 100);*/
//#44 Default Parameter

/*function S_bids(a, b=100, c) {
    document.write(a+ "<br>"+ b+ "<br>"+ c);
}
S_bids(50, undefined, 500);*/

function j_bid(sam, a= [s, b]) {
 document.write("b: "+a[0]);
 document.write(" s: "+a[1]);
 document.write(" sam: "+ sam);   
}
j_bid(50, [45, 85]);

//#45 Rest Parameter

/*function nik(a,b,...bids) {
    document.write("<br>" +a+ "<br>");
    document.write(b+ "<br>");
    document.write(bids[2]);
}
nik(10, 20, 30, 40, 50);*/

//#46

function jack(S, W) {
    return(S+W);
}
//var q = jack(10, 50);
document.write(" "+jack(10, 50));

// #50 Variable Hoisting
//In Variable Hoisting only declaration is hoisted not a initialization.
o = 'SAM00010';
document.write("<br>" + o);
//document.write(u);
//console.log(u);
//u = 20;
var o;

// #51 Closure
/* function show() {
    var j = "Sam";
    document.write(j+ "<br>");
    function innerfun() {
        var k = "Jack";
        document.write(k+ "<br>");
        document.write(j+ "<br>");
    }innerfun();
}show(); */

var counter = 0;
function add() {
    counter += 1;
}

add();
add();
add();
add();
document.write("<br>" + counter);

//#52 Function expression
var x = function show(x, y){
    document.write("<br>" + x + " " + y);
}
x(10, 25);

//#53 anonymous function [without function name]

/*var dis = function(t){
    document.write("<br>" + t + "<br>" + "MARTTIN");
}
dis(5000);*/

//#54 Passing anonymous function as argument

function daz(myfun){
    return 'myfun';
}
document.write( daz (function(){
    return "<br>" + "SAMBIds";
}  )); 

//#55  Returning anonymous function as argument

function doc(a) {
    return function(b){
       return a + b;
    };
}
var af = doc(1350);
document.write("<br>" + af(20));  

/*
function doc(a){
    return function(b){
        return a+ b;      
    };
}
var af = doc(10);
document.write("<br>" + af(5000)); */

//#56Arrow function

var ag = () =>{           //this is the arrow function of following anonymous function
    document.write("<br>" + "JAY");
}
ag();

/*
var ag = function(){
    document.write("<br>" + "JAY");
}
ag(); */

// Arrow function with parameter

var aa = (g) =>{
    document.write("<br>" + "JAY " + g);
}
aa(45);

//arrow function with default parameter

var ah = (a, b=50) =>{
    document.write("<br>" + a + " " + b);
}
ah(10);

//arrow function with rest parameter

var aj = (a,...d) =>{
    document.write("<br>" + a + " " + d);
}
aj(1,2,3,4,5,6);

// #anonymous function using arrrow function
//first type with { }
var er = l =>{
    return l;
}
document.write("<br>" + er(1000));

// Second type without { }
var ay = t => t;
document.write("<br>" + ay(50000));

//#57 immediate invoked function expression
//In this add starting and ending '(' ')' of function and,add paranthesis (); for calling purpose at the end.
( function(){
    document.write("<br>" + "SAM" + "<br>") 
} ) ();

//# var , let, const

function mysam(){
    var p = 10;
    if(true){
        let p = 20;
        document.write(p + "<br>");
    }
    document.write(p + "<br>");
}mysam();

// #69 Declaration and initialization of object
/*
var fees = {};               //empty object declared
fees['Sam'] = 100;                  //object Declaration
fees.jay = 500;                     //object Declaration
fees["Soham Bidwai"] = 1000;    //object Declaration [Allowed]
// fees.Soham Bidwai = 2000;    //object Declaration[Not allowed] 
document.write(fees["Soham Bidwai"] + "<br>");
// document.write(fees.Soham Bidwai + "<br>");
document.write(fees['Sam'] + "<br>");
document.write(fees.jay);  */
/*
var das = {
    Sam:100,
    sad:200,
    total:function(){
           return(100 + 200);
    }
}
document.write(das.total());*/
/*
var fad = { };
    fad['rahul']=500,
    fad["sam ram"]=500;
    fad['total']=function(){
        return(fad.rahul + fad["sam ram"]);
    }
document.write(fad['total']()); */

//# 70 Object constructor in JS

var das = new Object();
das['Rahul'] = 40000,
das.sam = 600;
das['total'] = function(){
    return(das['sam'] + das.Rahul);
    // return(this['sam'] + this.Rahul);  insted das you can use 'this' keyword.
}
delete das.sam;
document.write(das.total()); 
document.write("<br>" + das.sam);
document.write("<br>" + das.Rahul);

var doc = { Ashu:500, Ankit:200, total:function(){return(doc.Ashu + doc.Ankit)}};
document.write("<br>" + doc.total());
delete doc.Ankit;
document.write("<br>" + doc.total());
// https://www.youtube.com/watch?v=HSZA_XyrPAI