let personas = {
    Luis: 15,
    Ana: 19,
    José1: 21,
    Carmen: 17,
    Rosa: 18,
    José2: 22,
    María: 17,
    Luz: 19,
    Rafael: 23,
    Liz: 15,
    Marcos: 20,
    Leo: 16
};

let contadorMayoresEdad = 0;

for (let persona in personas) {
    if (personas[persona] >= 18) {
        contadorMayoresEdad++;
    }
}

let porcentajeMayoresEdad = (contadorMayoresEdad / Object.keys(personas).length) * 100;

let salida = document.getElementById("salida");
salida.innerHTML = "Mayores de Edad:";
salida.innerHTML += `<br>Cantidad de Personas: ${Object.keys(personas).length}`;
salida.innerHTML += `<br>Cantidad de Personas Mayores de Edad: ${contadorMayoresEdad}`;
salida.innerHTML += `<br>Porcentaje de Personas Mayores de Edad: ${porcentajeMayoresEdad.toFixed(2)}`;