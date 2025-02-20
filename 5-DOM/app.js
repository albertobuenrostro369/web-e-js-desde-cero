// Capturar elementos del DOM
const inputComment = document.getElementById("inputComentario");
const btnComment = document.getElementsByTagName("button")[0];
const boxComments = document.getElementById("comentarios");

// Función para agregar comentarios
let comentar = (event) => {
    event.preventDefault(); // Evita que la página se recargue

    if (inputComment.value.trim() !== "") { // Validar que el input no esté vacío
        let nuevoComentario = document.createElement("li");
        nuevoComentario.classList.add("comentario-item");
        nuevoComentario.innerHTML = `
            <div class="comentario-contenido">
                <strong>Usuario Anónimo:</strong> ${inputComment.value}
            </div>
            <span class="fecha">${new Date().toLocaleString()}</span>
            <button class="eliminar-btn">❌</button>
        `;

        // Agregar funcionalidad de eliminar comentario
        nuevoComentario.querySelector(".eliminar-btn").addEventListener("click", function() {
            nuevoComentario.remove();
        });

        boxComments.appendChild(nuevoComentario);
        inputComment.value = ""; // Limpiar el input después de agregar el comentario
    }
};

// Agregar evento de click al botón
btnComment.addEventListener("click", comentar);
