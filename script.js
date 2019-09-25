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
   <a onclick="eliminarcontacto(`+ index + `)"><i class="fa fa-trash"></i></a>
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
  var contactosul = document.getElementById("contactos");
  contactosul.innerHTML = "";
  contactos.forEach(mostrarContactos);
}

function abrirmodal() {
  var body = document.getElementsByTagName("body");
  var body = bodyTags[0];
  body.classList.add("modal-open");
}

function cerrarmodal() {
  var body = document.getElementsByTagName("body");
  var body = bodyTags[0];
  body.classList.remove("modal-open");
}

function validarcontacto() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var errores = [];
  if (nombre.lenght === 0) {
    errores.push("El nombre no puede estar vacio");
  }
  if (nombre.lenght === 0) {
    errores.push("El email no puede estar vacio");
  }

  if (errores.length === 0) {
    //agregar contactos
    agregarcontactos();
  } else {
    //mostrar errores
  }
}

function agregarcontactos() {
  var nombre = document.getElementById("nombre").value;
  var empresa = document.getElementById("empresa").value;
  var email = document.getElementById("email").value;
  var telefono = document.getElementById("telfono").value;

  contactos.push({
    nombre,
    empresa,
    email,
    telefono
  });
  mostrartodosloscontactos();
  limpiarFormulario();
  cerrarmodal();
}
function limpiarFormulario() {
  var nombre = document.getElementById("nombre").value = "";
  var empresa = document.getElementById("empresa").value = "";
  var email = document.getElementById("email").value = "";
  var telefono = document.getElementById("telfono").value = "";
}
function mostrarerrores(errores) {
  var contenedorerrores = document.getElementById("errores");
  errores.forEach(function (errores))
}
function eliminarcontacto(index) {
  contactos.splice(index, 1);
  mostrartodosloscontactos();
}
mostrartodosloscontactos();