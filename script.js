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

function mostrarContacto(contactos) {
  var contenedorContactos = document.getElementById("ccontactos");
  contenedorContactos.insertAdjacentHTML("beforeend",
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
      <a href="mailto:`+ contactos.email + `">` + contactos.telefono + `</a>
    </div>
    <div class="dato">
      <i class="fa fa-phone"></i>
      <a href="tel:55555555">55555555</a>
    </div>
  </div>
</li>`);
}

function mostrarTodosLosContactos() {
  contactos.forEach(mostrarContacto);
}

mostrarTodosLosContactos();

mostrarContacto(contactos[1]);