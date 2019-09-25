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

function mostrarContacto(contacto) {
  // escribir adentro del ul el formato del li
  var contenedorContactos = document.getElementById("contactos");
  contenedorContactos.insertAdjacentHTML("beforeend",
    `<li class="contacto">
      <div class="actions">
        <a><i class="fa fa-trash"></i></a>
      </div>
      <i class="userIcon fa fa-user"></i>
      <h4 class="nombre">`+ contacto.nombre + `</h4>
      <div class="datos">
        <div class="dato">
          <i class="fa fa-building"></i>
          <span>`+ contacto.empresa + `</span>
        </div>
        <div class="dato">
          <i class="fa fa-envelope"></i>
          <a href="mailto:`+ contacto.email + `">` + contacto.email + `</a>
        </div>
        <div class="dato">
          <i class="fa fa-phone"></i>
          <a href="tel:`+ contacto.telefono + `">` + contacto.telefono + `</a>
        </div>
      </div>
    </li>`);
}

function mostrarTodosLosContactos() {
  var contenedorContactos = document.getElementById("contactos");
  contenedorContactos.innerHTML = "";
  contactos.forEach(mostrarContacto);
}

function abrirModal() {
  var bodyTags = document.getElementsByTagName("body");
  var body = bodyTags[0];
  body.classList.add("modal-open");
}

function cerrarModal() {
  var bodyTags = document.getElementsByTagName("body");
  var body = bodyTags[0];
  body.classList.remove("modal-open");
}

function validarContacto() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var errores = [];

  if (nombre.length === 0) {
    errores.push("El nombre no puede estar vacío.");
  }

  if (email.length === 0) {
    errores.push("El email no puede estar válido.");
  }

  if (errores.length === 0) {
    agregarContacto();
  } else {
    mostrarErrores(errores);
  }
}

function agregarContacto() {
  var nombre = document.getElementById("nombre").value;
  var empresa = document.getElementById("empresa").value;
  var email = document.getElementById("email").value;
  var telefono = document.getElementById("telefono").value;

  contactos.push({
    nombre: nombre,
    empresa: empresa,
    email: email,
    telefono: telefono
  });

  mostrarTodosLosContactos();
  limpiarFormulario();
  cerrarModal();
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("empresa").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefono").value = "";
}

function mostrarErrores(errores) {
  var contenedorErrores = document.getElementById("errores");
  contenedorErrores.innerHTML = "";
  errores.forEach(function (error) {
    contenedorErrores.insertAdjacentHTML('beforeend',
      '<li>' + error + '</li>'
    );
  });
}

mostrarTodosLosContactos();