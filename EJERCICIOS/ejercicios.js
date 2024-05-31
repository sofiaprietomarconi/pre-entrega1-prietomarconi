//EJERCICIO 1

/* let nombreSistema = "Sofia"

let nombreUsuario = prompt("Ingrese su nombre de usuario")

if (nombreSistema == nombreUsuario) {
    console.log ("Fui yo")
} else{
    console.log("Yo no fui")
} */

//EJERCICIO 2

/* let tecla = prompt ("ingrese una tecla")

if ((tecla == "Y") ||  (tecla == "y")) {
    console.log("Correcto")
}else {
    console.log ("Incorrecto")
} */

//EJERCICIO 3

/*let entrada = prompt("ingrese un numero del 1 al 4")

if (entrada == 1) {
    console.log ("Elegiste a Homero")
} else if( entrada == 2){
    console.log ("Elegiste a Marge")
}else if( entrada == 2){
    console.log ("Elegiste a Bart")
}else if( entrada == 2){
    console.log ("Elegiste a Lisa")
} else {
    console.log("Tu numero debe estar entre el 1 y el 4")
} */

//EJERCICIO 4

/*let valor = prompt("Intrege un numero")

if (valor <= 1000) {
    console.log("Presupueto bajo")
}else if((valor > 1001) && (valor <= 3000)) {
    console.log("Presupueto medio")
} else if(valor > 3000) {
    console.log("Presupueto alto")
} */

//EJERCICIO 5

/* let producto1 = prompt ("ingrese producto 1")
let producto2 = prompt ("ingrese producto 2")
let producto3 = prompt ("ingrese producto 3")
let producto4 = prompt ("ingrese producto 4")

if ((producto1 == "") || (producto2 == "") || (producto3 == "") || (producto4 == "")){
    console.log ("Debe ingresar 4 productos")
} else {
    console.log (producto1 + " " + producto2 + " " + producto3 + " " + producto4) 
} */

// EJERCICIO 1

/* let repeticiones = prompt("Ingresa la cantidad de repeticiones")
let mensaje = prompt ("Ingresa el mensaje que desea repetir")


for (let i = 0 ; i <= repeticiones ; i++ ){
    console.log(mensaje)
} */

// EJERCICIO 2

/* let cantidadRep = prompt("Ingrese la cantidad de repeticiones")

for (let i= 0 ; i < cantidadRep ; i++) {
    if (i > 3){
        break
    }
    alert ("lado") 
} */

// EJERCICIO 3


/* let alumnos = ''
for (let i=0 ; i < 10 ; i++){
    alumnos += prompt ("Ingrese el alumno" + i) 
}

alert (alumnos) */

// EJERCICIO 4

/* let stopWhile = "Voldemort"
let nombre = ''

while ( nombre != stopWhile ) {
    nombre = prompt ("Ingrese un nombre")
} */

// EJERCICIO 2

/*function numeroDecimal (numero) {
    return Math.round (numero)
}

for (let i=0 ; i < 5 ; i++) {
    let numero = prompt ("ingrese un numero")
    console.log (numeroDecimal(numero))
} */

