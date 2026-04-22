/*function saludar(){
    console.log('hola');
}
saludar(); */


/*const insertarEstudiante = () => {
    const titulo = document.getElementById("principal");
    console.log(principal);
}

insertarEstudiante();

const ponerColorBg = (color) =>{
    const elemento = document.getElementById("principal");
    elemento.style.backgroundColor="gainsboro"
    elemento.innerText = "AMONGUS!"
}*/
/*
const agregarEstudiante = () => {
    const contenedor = document.getElementById("contenedor");
    const itemEstudiante = document.createElement("p");
    itemEstudiante.innerText="HOLAAAAAAAAAAA";
    contenedor.appendChild(itemEstudiante);
}
*/

/* Usar objetos
var estudiante={id:0, nombre: "oscar_lal"};
*/
const lstEstudiantes = [{id:1, nombre:"Osker"},
    {id:2, nombre:"Pacheke"},
    {id:3, nombre: "Manuelito"}
];

 
const renderizarListaEstudiantes = () => {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerText=""; //Reiniciamos la pagina 
    lstEstudiantes.forEach((estudiante) =>{
        const itemEstudiante = document.createElement("p");
        itemEstudiante.innerText=estudiante.nombre;
        contenedor.appendChild(itemEstudiante);
    });
}
/*
//llamando directamente cuando se inicia el renderizado pero tambien lo agregué al botón
renderizarListaEstudiantes();
*/


const insertarEstudiante = (event) =>{
    event.preventDefault();//para evitar que recargue la pagina
    const nombreEstudiante = document.getElementById("nombreEstudiante").value;
    lstEstudiantes.push({id:0, nombre: nombreEstudiante});
    renderizarListaEstudiantes();
}