function calcularCuotas(precio, interes) {
    return precio + ((precio * interes)/100)
}

for (let i=1 ; i < 6 ; i++){
    let precio = parseInt (prompt ("ingrese el precio del producto " + i))
    let cuotas = parseInt (prompt ("ingrese si desea hacerlo en: 1, 3, 6 o 12 cuotas"))

    if (cuotas == 1) {
        interes = 5
    } else if (cuotas == 3){
        interes = 15
    } else if (cuotas == 6){
        interes = 30
    } else if (cuotas == 12){
        interes = 50
    } else {
        console.log("Numero de cuotas incorrecto. Debe ser 1, 3, 6 0 12")
    }

    console.log ("El precio total que debe abonar es  " + calcularCuotas(precio,interes) + " " +  "y su interes generado por la cantidad de cuotas  " + cuotas + " " + "es  " + "%" + interes )
}