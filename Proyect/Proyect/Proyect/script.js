console.log("Hola desde la consola");

//Cambiar el título
const titulo = document.getElementById("titulo");
const btnCambiar = document.getElementById("btnCambiar");

btnCambiar.addEventListener("click", () => {
    titulo.textContent = "Texto cambiado con JavaScript";
    titulo.style.color = "green";
});

// Agregar elementos a la lista
const lista = document.getElementById("lista");
const btnAgregar = document.getElementById("btnAgregar");

btnAgregar.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "JavaScript";
    lista.appendChild(li);
});

// Botón de alerta
const btnAlerta = document.getElementById("btn");

btnAlerta.addEventListener("click", () => {
    console.log("Se hizo clic en el botón de alerta");
    alert("¡Botón presionado!");
});