var contactos = [
  {
    nombre: "Macarena Poo García",
    empresa: "Retail Zipline",
    email: "macarenapoo@gmail.com",
    telefono: "5556801216"
  },
  {
    nombre: "Juan Fernando Donoso",
    empresa: "Universidad Iberoamericana",
    email: "juan.donoso@uia.mx",
    telefono: "5555555555"
  }
];
function mostrarContactos(contacto) {
  var contactosul = document.getElementById("contactos");
  contactosul.insertAdjacentHTML("beforeend",
    `<li class="contacto">
 <div class="actions">
   <a><i class="fa fa-trash"></i></a>
 </div>
 <i class="userIcon fa fa-user"></i>
 <h4 class="nombre">`+ contactos.nombre + `</h4>
 <div class="datos">
   <div class="dato">
     <i class="fa fa-building"></i>
     <span>`+ contactos.empresa + `</span>
   </div>
   <div class="dato">
     <i class="fa fa-envelope"></i>
     <a href="mailto:`+ contactos.email + `">` + contactos.email + `</a>
   </div>
   <div class="dato">
     <i class="fa fa-phone"></i>
     <a href="`+ contactos.telefono + `">` + contactos.telefono + `</a>
   </div>
 </div>
</li>`);
}
function mostrartodosloscontactos() {
  contactos.forEach(mostrarContactos);
}

mostrartodosloscontactos();