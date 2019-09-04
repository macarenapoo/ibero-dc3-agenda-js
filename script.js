var contactos = [
  { nombre: "Macarena Poo García", 
    empresa: "Retail Zipline", 
    email: "macarenapoo@gmail.com", 
    telefono: "5556801216" },
  { nombre: "Juan Fernando Donoso", 
    empresa: "Universidad Iberoamericana", 
    email: "juan.donoso@uia.mx", 
    telefono: "5555555555" }
];

function renderearContacto(contacto, index) {
  var contenedor = document.getElementById("contactos");
  contenedor.insertAdjacentHTML('beforeend', `
    <li class="contacto">
      <div class="actions">
        <a href="javascript: eliminarContacto(` + index + `)"><i class="fa fa-trash"></i></a>
      </div>
      <i class="userIcon fa fa-user"></i>
      <h4 class="nombre">`+ contacto.nombre + `</h4>
      <div class="datos">
        <div class="dato">
          <i class="fa fa-building"></i>
          <span>` + contacto.empresa + `</span>
        </div>
        <div class="dato">
          <i class="fa fa-envelope"></i>
          <a href="mailto:` + contacto.email + `">` + contacto.email + `</a>
        </div>
        <div class="dato">
          <i class="fa fa-phone"></i>
          <a href="tel:` + contacto.telefono + `">` + contacto.telefono + `</a>
        </div>
      </div>
    </li>
  `);
}

function renderearTodosLosContactos() {
  document.getElementById("contactos").innerHTML = "";

  contactos.forEach(
    function(contacto, index) { 
      renderearContacto(contacto, index);
    }
  );
}

function validarContacto(contacto){
  var errores = [];
  if (contacto.nombre === "") {
    errores.push("Nombre no puede estar vacío");
  }
  if (contacto.email === "") {
    errores.push("Email no puede estar vacío");
  } else {
    if(!validarPassword(contacto.email)) {
      errores.push("El email debe de ser un correo válido")
    }
  }
  
  return {
    valido: errores.length === 0,
    errores
  }
}

function imprimirErrores(errores) {
  var contenedor = document.getElementById("errores");
  contenedor.innerHTML = "";
  errores.forEach( function(error) {
    var li = document.createElement('li');
    li.innerHTML = error;
    contenedor.appendChild(li);
  });
}

function agregarContacto() {
  var nombre = document.getElementById("nombre");
  var empresa = document.getElementById("empresa");
  var email = document.getElementById("email");
  var telefono = document.getElementById("telefono");
  var contacto = {
    nombre: nombre.value,
    empresa: empresa.value,
    email: email.value,
    telefono: telefono.value
  };
  var contactoValido = validarContacto(contacto)
  if ( contactoValido.valido ) {
    contactos.push(contacto);
    cerrarModal();
    renderearTodosLosContactos();
  } else {
    imprimirErrores(contactoValido.errores);
  }
}

function eliminarContacto(index) {
  contactos.splice(index, 1);
  renderearTodosLosContactos();
}

function abrirModal() {
  document.getElementsByTagName('body')[0].classList.add("modal-open");
}

function cerrarModal() {
  limpiarFormulario();
  document.getElementsByTagName('body')[0].classList.remove("modal-open")
}

function limpiarFormulario() {
  var nombre = document.getElementById("nombre");
  var empresa = document.getElementById("empresa");
  var email = document.getElementById("email");
  var telefono = document.getElementById("telefono");
  var errores = document.getElementById("errores");
  errores.innerHTML = "";
  nombre.value = "";
  empresa.value = "";
  email.value = "";
  telefono.value = "";
}


renderearTodosLosContactos();

