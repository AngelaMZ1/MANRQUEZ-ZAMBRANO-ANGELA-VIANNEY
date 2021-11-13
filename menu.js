var menu;
menu=parseInt(prompt("Menu de opciones: \n 1.Suma \n 2.Resta \n 3.Multiplicacion \n 4.Division  \n 5.Raiz cuadrada \n 6.Formula general \n 7.Binomio cuadrado perfecto \n 8.Salir \n Favor  ingresar opcion: "));

switch(menu){
case 1:
var n1=parseInt(prompt("Introduce un numero"));

var n2=parseInt(prompt("Inroduce otro numero"));


function sumar(a,b){

return a+b;
}
var resultado=sumar(n1,n2);
console.log(`La suma es: ${resultado}`);
break;

case 2:
var na1=parseInt(prompt("Introduce un numero"));

var na2=parseInt(prompt("Inroduce otro numero"));

function restar(a,b){
return a-b;
}

var resul=restar(na1,na2);

console.log(`La resta es: ${resul}`);
break;

case 3:
var no1=parseInt(prompt("Introduce un numero"));

var no2=parseInt(prompt("Inroduce otro numero"));

function multi(a,b){
return a*b;
}

var resul=multi(no1,no2);

console.log(`La multiplicacion es: ${resul}`);
break;

case 4:
var num1=parseInt(prompt("Introduce un numero"));

var num2=parseInt(prompt("Inroduce otro numero"));

function Division(a,b){
return a/b;
}

var resul=Division(num1,num2);

console.log(`La division es: ${resul}`);
break;

case 5:
var nam1=parseInt(prompt("Inroduce un numero"));	
function Raiz(a){
	var n;
	n=Math.sqrt(a);
return n;
}
var resul=Raiz(nam1);

console.log(`La raiz cuadrada es: ${resul}`);
break;

	
case 6:
var a=parseInt(prompt("Inroduce a"));	
var b=parseInt(prompt("Inroduce b"));
var c=parseInt(prompt("Inroduce c"));	
function x1(a, b, c,r)
{
if(a !=0){
r=b*b-4*a*c;

if(r>=0){
return(-b + Math.sqrt(r))/(2*a);
}
else{
	console.log("Las raiz es compleja");
}
}
else{
	console.log("El valor no corresponde  a una ecuacion de segundo grado")
}
}
var ram=x1(a,b,c);
console.log(`x1: ${ram}`);

function x2(a, b, c,r)
{
if(a !=0){
r=b*b- 4*a*c;
if(r>=0){
return(-b - Math.sqrt(r))/(2*a);
}
else{
console.log("Las raices son complejas");
}
}
else{
console.log("Los valores no corresponden  a una ecuacion de segundo grado")
}
}
var r2=x2(a,b,c);
console.log(`x2: ${r2}`);
break;

case 7:
var nac1=parseInt(prompt("Introduce un numero"));

var nac2=parseInt(prompt("Inroduce otro numero"));

function binomio(a,b){
	return(Math.pow(a,2)+(2*a*b)+(Math.pow(b,2)));
}
var r3=binomio(nac1,nac2);
console.log(`(a+b)^2: ${r3}`);

function binomio2(a,b){
	return(Math.pow(a,2)-(2*a*b)+(Math.pow(b,2)));
}
var r3=binomio2(nac1,nac2);
console.log(`(a-b)^2: ${r3}`);




break;

case 8:
break;
	default:
	console.log(" Favor ingresar solo opciones validas");
	break;
}
