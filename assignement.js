//hello world
console.log("Hello Dr Ait");

//conditional
var a=1;
var b=2;
if(a+b > 4)
{
    console.log(a+b)
}
else if(a+b < 1)
{
    console.log(a+b)
}
else console.log("hi");

//switch
var nam='Prajwal';
switch(nam)
{
    case 'Prajwal':console.log('You Found Me');
    break;
    default:console.log("you can't see me");
}
//loops
for(var i=0;i<5;i++)
console.log("val:"+i);

let fruits=['apple','peach','orange']
fruits.forEach(item => console.log(item));
for(item of fruits){
    console.log(item);
}
for(item in fruits){
    console.log(item);
}
 var i=0;
 while(i<5){
    console.log(i);
    i++;
 }
do{
    console.log(i);
    i++;
}while(i<10)

//operators
var i=5,j=7;
console.log(i++);
console.log(++i);
console.log(i--);
console.log(--i);

//hoisting
const p='hello';
console.log(p);

//let and const
let w='sunny';
let ww=function cw(){
    let w='rainy';
    console.log("cw"+w);
}
ww();
console.log(w);

const u='sunny';
function cu(){
    //u='rainy';
    console.log("cu"+u);
}
cu();
console.log(u);

for(var i=1;i<5;i++)
{
    console.log(i);
}
console.log(i);
for(let d=1;d<5;d++)
{
    console.log(d);
}
//console.log(d);

var f=1;
console.log(f);
//let f=2;
//console.log(f);
//const f=10;

console.log(name+' hello');
console.log(`${name} hello`);

//object
var obj={key:'value',value:'key',heyy(){console.log("hello!!!");}};
obj.heyy();
console.log(obj.key);
console.log(obj['value']);

console.log(+0==-0);
console.log(Object.is(+0,-0));
console.log(+0===-0);
console.log(NaN == NaN);
console.log(Object.is(NaN,NaN));

//arrays
var a=['hello',2,true]
for(var i=0;i<3;i++)
{console.log(a[i])}
a.push("hi");
console.log(a.pop())
console.log(a.shift())
console.log(a)
a.push("hi");
a.push("hii");
a.push("hiii");
a.push("hiiii");
console.log(a)
a.splice(2,3,'hola')//splice
console.log(a)
console.log(a.slice(1,3))//slice
a.forEach(item => console.log(item))

//functions
console.log(boy(2,3));
function boy(a,b){
    return a+b
}

//iife
(function(x,y){console.log(x*y)})(2,3)

//call and apply and bind
let bird={
    name:"chicken",
    eat(a){
        console.log(`${this.name} ate ${a}`)
    }
}
let human={name:'sparrow'}
console.log(bird.eat('sprouts'))
console.log(bird.eat.call(human,'sprouts'));
console.log(bird.eat.apply(human,['sprouts']));
let he=bird.eat.bind(human)
he('mangoes')

//this
let ob={
    name:"rahul",
    prnt(){
        console.log(this)
    }
};
ob.prnt();

//arrow functions
const objj={ 
    name:"Prajwal",
    sing(){
        console.log('a',this)
        var af=()=>{console.log('b',this)}
        af();
    }
};
objj.sing();

//higher order functions
//take function as input
function ppp(){
    console.log("heyy")
}
setInterval(ppp,1000)
clearInterval(1)

//return function
/*function vote(age) {
    return age>=18;
}
function drive(age) {
    return age>=16;
}
function marry(age) {
    return age>21;
}*/
function age_req(r_age){
    return function(age){
    return age>=r_age}
}
/*let vote=age_req(18);
let drive=age_req(16);
let marry=age_req(21);
console.log(vote(17))
console.log(drive(17))
console.log(marry(17))*/
console.log('voting status:'+age_req(18)(17));
console.log('driving status:'+age_req(16)(17));
console.log('marrying status:'+age_req(21)(17));

//encapsulation
class Student{
    constructor(r,n){
        this.r=r;
        this.n=n;
    }
    attendance(){
        console.log("roll no "+this.r+" is "+this.n);
    }
}
var adam=new Student(10,'Nick');
adam.attendance();

 class Box{
    constructor(l){
        this.l=l;
    }
    display(){
        console.log(this);
    }
 }
 let ob1=new Box(10);
 ob1.display();

 //prototypical inheritance
 //obj.__proto__
 //Object.__proto__
 //Object.prototype
 //Array.prototype

 var parent={
    name:'parent',
    sing:()=>{console.log(`${name} singing ....`)},
    food:()=>{console.log("This is my food")}
 }
 var child={
    name:'child',
    food:()=>{console.log("this is my foood")}
 }
 child.__proto__=parent;
 for(let prop in child){console.log(prop+"---"+child.hasOwnProperty(prop));};
 
 class fruit{
    constructor(name,col){
        this.name=name;
        this.col=col;
    }
    effect(){
        console.log(this)
    }
 }
 class banana extends fruit{
    constructor(name,color,type){
        super(name,color);
        this.type=type;
    }
    effect(){
        super.effect();
    }
 }
 var pp=new banana('apple','red','seedless');
 pp.effect();
 var ppp=new fruit('apple','red');
 ppp.effect();

 //polymorphism
 //overloading
 class vehicle{
    constructor(name){
        this.name=name;
    }
    display(){console.log("I have "+this.name)}
    display(cost){console.log("I have "+this.name+" of cost "+cost)}
 }
 var v=new vehicle('Buggatti')
 v.display()
 v.display(200000)

 //overriding
 class bike extends vehicle{
    constructor(name){
        super(name);
    }
    display(){
        console.log("I love "+this.name);
    }
 }
 k=new bike("r15");
 k.display();

 //exception handling
 const err= new Error("yup it's error");
 err.message

 function aaa(){
    const b = new Error("Hi I'm error"); 
    return b;
}
aaa();

try{
    console.log(q);
}
catch(error){
    console.log("We got an error "+error)
}

function able(age){
if(age<18){
    try{
        throw new Error("You are under age.")
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("Nobody can stop me!!")
    }
}
else{
    console.log("You can vote.")
}
}
able(17);

//Document
console.log(document);
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.body);
console.log(document.head);
console.log(document.title);
console.log(document.all)
document.title = 'holaa';
console.log(document.title);
var age=prompt("What is your age?")
if(age>18){
    alert("Valid to vote")
}
else{
    alert("Invalid")
}

//dom
console.dir(document.getElementById("1"))
console.log(document.getElementsByClassName("st"))
console.log(document.getElementsByTagName("h3"))
//console.log(document.querySelector(".st"))
//document.getElementById("2").style.color='blue'

function change(id){
    id.innerHTML="hehehe"
}

//var dd=document.getElementById('btn').addEventListener('click',function(){console.log("Welcome")})

/*var lis=document.querySelectorAll('li');
for(var i=0;i<lis.length;i++){
    lis[i].addEventListener('click',function(){
        this.style.color='blue';});}
for(var i=0;i<lis.length;i++){
    lis[i].addEventListener('mouseover',function(){
        this.style.color='red';});}*/

//closure
let amm=(gdad)=>(dad)=>(son)=>console.log(`${gdad}-->${dad}-->${son}`);
//amm("rmn")("nrn")("nnn");
let curriedMultiply=(a)=>(b)=>a*b;
let multiplyBy7=curriedMultiply(7);
//multiplyBy7(5);
let addd=(a)=>(b)=>console.log(a+b);
let aBy2=addd(2);
//aBy2(10);
const add=(a,b)=>a+b;
const mult=(a,b)=>a*b;
//add(2,mult(3,4))

const promise=new Promise((resolve,reject)=>{
    if(true)
    resolve("It worked!");
    else
    reject("It broken!");
})
//promise.then(result=>result+"!!").catch(result=>result+"!!")

//map
let arrrr=[1,2,3,4]
let narrrr=arrrr.map(num=>num*2)
console.log(narrrr)

let x=7
const adddd=(y)=>x+=y

//filter
let farrrr=arrrr.filter(num=>num>2)
console.log(farrrr)

//reduce
let rarrrr=arrrr.reduce((acc,num)=>acc+num,5)
console.log(rarrrr)