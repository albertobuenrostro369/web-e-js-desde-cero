// Evaluador de Notas con Mensajes Personalizados

// Pedir al usuario que ingrese la nota
let nota = prompt("Ingresa tu nota (0-100):");

// Convertimos la entrada en un número
nota = Number(nota);

// Verificamos que la entrada sea válida (número entre 0 y 100)
if (!isNaN(nota) && nota >= 0 && nota <= 100) {
    
    // Evaluar la nota con condiciones
    if (nota >= 90) {
        console.log(`Tu nota es ${nota}. ¡Excelente! 🌟`);
    } else if (nota >= 75) {
        console.log(`Tu nota es ${nota}. ¡Bien hecho! 👍`);
    } else if (nota >= 60) {
        console.log(`Tu nota es ${nota}. Suficiente. 📚`);
    } else {
        console.log(`Tu nota es ${nota}. No aprobaste. 😢 ¡Sigue esforzándote!`);
    }

} else {
    console.log("Por favor, ingresa un número válido entre 0 y 100.");
}