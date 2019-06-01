$(document).ready(function() {
  console.log("el documento está listo");
});

// Selecciones
// 1.Seleccionar todos los elementos div que poseen la clase "module".
$('div.module');


// 2.Averiguar cuantos elementos en la página están ocultos (ayuda: .length).
$('*:hidden').show();

// 3.Seleccionar todas las filas impares del cuerpo de la tabla.
$("tr:odd");
//..............................................................................................
// Recorrer el DOM

// 1.Seleccionar el elemento input, luego dirigirse hacia el formulario y añadirle una clase al mismo.
$( "input" ).addClass("myClass");

// 2.Seleccionar el ítem que posee la clase "current" dentro de la lista #myList y remover dicha clase en el elemento; luego añadir la clase "current" al siguiente ítem de la lista.
$('.current').removeClass('current');
$("#myList li").eq(5).addClass("current");

// 3.Seleccionar el primer ítem de la lista en el elemento #slideshow; añadirle la clase "current"
//al mismo y luego añadir la clase "disabled" a los elementos hermanos. **
$(" #slideshow li:first").addClass( "current" );
$( ".current").nextAll().addClass("disabled");
//............................................................................................
// Manipulación

//1.Añadir 5 nuevos ítems al final de la lista desordenada #myList. Ayuda:
for (var i = 0; i<5; i++) { var $myNewElement = $("<li>Nuevo elemento</li>");
$myNewElement.appendTo("#myList");
}
//2.Remover los ítems impares de la lista.
. $("#tmyList li:odd").remove();
//3.Añadir otro elemento h2 y otro párrafo al último div.module.
$("#specials").append("<h2 id=”foo”>Un encabezado</h2>");
$("#specials").append("<p id=”poo”>es un P</p>");
//4.Añadir otra opción al elemento select; darle a la opción añadida el valor "Wednesday". **
$("#specials select").append("<option value=”wendesday” > Wendesday </option>");
//5.Añadir un nuevo div.module a la página después del último; luego añadir una copia de una de las imágenes existentes dentro del nuevo div. **
var $myNewElement = $("<div></div>").attr("id","myDiv");
$myNewElement.insertAfter("section #specials");

$("#slideshow li:first img")
  .clone()
  .appendTo("#myDiv");
//CORROBORRAR TODOS LOS BLOQUES DE JQUERY///////////////////////////////////////////////
