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
function imprimirContacto(contacto, index){
  var contactos = document.getElementById("contactos");
  contactos.insertAdjacentHTML('beforeend', `<li class="contacto">
  <div class="actions">
    <a><i class="fa fa-trash" onClick="eliminarContacto(`+index+`)"></i></a>
  </div>
  <i class="userIcon fa fa-user"></i>
  <h4>`+ contacto.nombre +`<h4>
  <div class="datos">
    <div class="dato">`+ contacto.empresa +`
      <i class="fa fa-building"></i>
    </div>
    <div class="dato">`+ contacto.email +`
      <i class="fa fa-envelope"></i>
    </div>
    <div class="dato">`+ contacto.telefono +`
      <i class="fa fa-phone"></i>
    </div>
  </div>
</li>`);

}

function imprimirContactos(){
  document.getElementById("contactos").innerHTML="";
  contactos.forEach(imprimirContacto);

}
function agregarContacto(){
  var nombre = document.getElementById("nombre").value;
  var empresa = document.getElementById("empresa").value;
  var email = document.getElementById("email").value;
  var telefono = document.getElementById("telefono").value;
  
  if (nombre.length < 1) {
    error = error + " El nombre es obligatorio";
    alert(error);
    var node = document.createElement("li");
    var textnode = document.createTextNode("Debe agregar nombre.\n");
    node.appendChild(textnode);
    document.getElementById("errores").appendChild(node);
}
if (email.length < 1) {
    error = error + " Debe agregar email\n";
    alert(error);
    var node = document.createElement("li");
    var textnode = document.createTextNode("El email esobligatorio.\n");
    node.appendChild(textnode);
    document.getElementById("errores").appendChild(node);
}
else {
    contactos.push({ nombre: nombre, empresa: empresa, email: email, telefono: telefono });
    cerrar();
    imprimirTodosLosContactos();
  
}




function eliminarContacto(index){
  contactos.splice(index,1);
  imprimirContactos();
}
function abrir(){var modaln = document.getElementById("modal").style.display = "flex";}
function cerrar(){var modaln = document.getElementById("modal").style.display = "none";}
function validarNombre(){
  
}
imprimirContactos();
