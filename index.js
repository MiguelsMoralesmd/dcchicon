let contactoSeleccionado = null;

document.getElementById("btnAgregar").addEventListener("click", function() {
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    agregarContacto(nombre, telefono);
    mostrarContactos();
});

document.getElementById("btnActualizar").addEventListener("click", function(){
    if(contactoSeleccionado !==null){
        let nombre = document.getElementById("nombre").value;
        let telefono = document.getElementById("telefono").value;
        actualizarContacto(contactoSeleccionado, nombre, telefono);
        mostrarContactos();
    }
});

function agregarContacto(nombre, telefono){
    let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    contactos.push({nombre, telefono});
    localStorage.setItem("contactos", JSON.stringify(contactos));
}
function actualizarContacto(index, nombre, telefono){
    let contactos = JSON.parse(localStorage.getItem("contactos"));
    contactos[index] ={ nombre, telefono };
    localStorage.setItem("contactos", JSON.stringify(contactos));
    contactoSeleccionado = null;
}
function mostrarContactos(){
    let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    let listaContactos = document.getElementById("listaContactos");
    listaContactos.innerHTML = "";

    contactos.forEach(function(contacto, index){
          let listItem = document.createElement("li");
          listItem.textContent = contacto.nombre + "-" + contacto.telefono;
          listItem.addEventListener("click", function(){
            contactoSeleccionado = index;
            document.getElementById("nombre").value = contacto.nombre;
            document.getElementById("telefono").value = contacto.telefono;
          });
           listaContactos.appendChild(listItem);
        });
 }

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
