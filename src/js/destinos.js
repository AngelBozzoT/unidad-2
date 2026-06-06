/*JS: JavaScript*/

var nombre ="Lalo";
let apellido ="Cura"

const pi = 3.14

console.log("Mensaje en negro")
console.warn("Mensaje en amarillo")
console.error("Mensaje en rojo")

var edad =30
if (edad >=18){
    console.log("Mayor de edad")
}else if(edad<40){
    console.log("Adulto")
}else{
    console.log("Tercera edad")
}

var nombres =["Pedro","Juan","Diego"]
for (let index = 0; index < 3; index++){
    console.log(nombre[index])
}

alumno = {
    nombre: "Lalo",
    apellido: "Cura",
    edad:55,
    usa_lentes:true

}

function saludar (){
    return "Hola como estas?"
}
function saludar2(nombre){
    return "Hola como estas"
}
console.table(lista)

//vamos a darle accion a los botonos de la pagina de los destinos 
//vamos a modificar el DOM:
const botones =document.querySelectorAll("#filtros button")
const cards = document.querySelectorAll("#grid-destinos[data-categoria]")
const sinResultados = document.getElementById("sin-resultados")

function filtrar(categoria){
    let visibles = 0
    cards.forEach(function(card){
        const coincidencia = categoria ==="todos" || card.dataset.categoria===categoria
        card.Style.display = coincidencia ? '' : 'none'
        /*if(coincidencia == true){
            card.style.display = ''
            visibles++
        }else {
            card.style.display = 'none'
        }
    })*/
   if(coincidencia) visibles++})
}

function marcarActivo(botonActivo){
    boton.forEach(function(btn){
        btn.classList.remove("btn-az")
        btn.classList.add("btn-outline-secundary")
    })
}

botones.forEach(function(boton){
    boton.addEventListener("click",function(){
        marcarActivo(boton)
        filtrar(boton.dataset.categoria)
    })
})