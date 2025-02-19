

// 🥭🍎🍌 CLASIFICACIÓN DE FRUTAS 🍉🍍🍇
// Vamos a contar cuántas frutas hay de cada tipo

// 🛒 Lista de frutas
let frutas = ["manzana", "pera", "manzana", "naranja", "pera", "uva", "naranja", "manzana", "pera"];

let contador = {}; // Aquí vamos a guardar la cantidad de frutas

// 🔄 Recorremos la lista con un `for`
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i]; 

    // Si la fruta ya está en el contador, le sumamos 1
    if (contador[fruta]) {
        contador[fruta]++;
    } else {
        contador[fruta] = 1; // Si no está, la agregamos con 1
    }
}

// 🎯 Imprimimos el resultado en la consola
console.log("🍏 Cantidad de cada fruta 🍍");
for (let fruta in contador) {
    console.log(`${fruta}: ${contador[fruta]}`);
}

// 🔄 OPCIÓN 2: Haciendo lo mismo pero con `while`
let contadorWhile = {}; 
let i = 0;

while (i < frutas.length) {
    let fruta = frutas[i];

    if (contadorWhile[fruta]) {
        contadorWhile[fruta]++;
    } else {
        contadorWhile[fruta] = 1;
    }

    i++; // No olvidar avanzar
}

// 📌 Imprimimos lo mismo con `while`
console.log("\n🍏 Cantidad de cada fruta (con while) 🍍");
for (let fruta in contadorWhile) {
    console.log(`${fruta}: ${contadorWhile[fruta]}`);
}