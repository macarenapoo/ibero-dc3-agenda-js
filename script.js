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
function validar(){
var nombre = document.getElementById("nombre").value;
var mail = document.getElementById("email").value;
var longnombre = camponombre(nombre);
var longmail = campomail(mail);
var texto1 = document.createElement("li");
     var textonombre = document.createTextNode("El campo nombre no puede estar vacio");
if(nombre!==""){

}else{
  node1.appendChild(texto1);
  document.getElementById("errores").appendChild(textonombre);
}
}
function imprimircontactos(dato, index){
var lista = document.getElementById("contactos");
lista.insertAdjacentElement('beforend', `<li class="contacto">
<div class="actions">
  <a><i class="fa fa-trash" onClick="eliminarContacto(`+ index +`)"></i></a>
</div>
<i class="userIcon fa fa-user"></i>
<h4 class="nombre">`+dato.nombre+`</h4>
<div class="datos">
  <div class="dato">
    <i class="fa fa-building"></i>
    <span>`+dato.empresa+`</span>
  </div>
  <div class="dato">
    <i class="fa fa-envelope"></i>
    <a href="mailto:`+dato.email+`">`+dato.email+`</a>
  </div>
  <div class="dato">
    <i class="fa fa-phone"></i>
    <a href="`+dato.telefono+`">`+dato.telefono+`</a>
  </div>
</div>
</li>`
);}
/*function imprimirtodosloscontactos(){
  document.getElementById("contactos").innerHTML="";
  contactos.forEach(imprimircontactos);
}*/
function agregarcontacto(){
var agregar = document.getElementsByClassName("datos").value;
contactos.push({nombre: agregar, empresa: agregar, email: agregar, telefono: agregar})
}
