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

function imprimirContacto(dato, index){
var pendiente = document.getElementById("contactos");
pendiente.insertAdjacentHTML('beforeend', 
`<li class="contacto">
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
);
}

function agregaContacto(){
  document.getElementById("modal").classList.remove("modal");
  document.getElementById("modal").classList.add("modal-open");
}

function cerrarContacto(){
  document.getElementById("modal").classList.add("modal");
  document.getElementById("modal").classList.remove("modal-open");
}

function validarCampos(){
  var nombre = document.getElementById("nombre").value;
  var mail = document.getElementById("email").value;
  var empresa = document.getElementById("empresa").value;
  var telefono = document.getElementById("telefono").value;
  var errores = document.getElementById("errores");
  errores.innerHTML="";

  var primera = validarLongitud(nombre);
  var segunda = validarLongitudMail(mail);
  var tercera = validarPrimerCaracter(mail);
  var cuarta = validarArroba(mail);
  var quinta = validarDominio(mail);
  var sexta = validarCampoMail(mail);
  var flag = true;

  if(!primera){
    var error = document.createElement("li");
    error.innerHTML="Nombre no puede estar vacío";
    errores.appendChild(error);
    flag = false;
}

if(!sexta){
  var error = document.createElement("li");
  error.innerHTML="Email no puede estar vacio";
  errores.appendChild(error);
  flag = false;
}else if(segunda && tercera && cuarta && quinta){
  // no se imprime nada
}else{
  var error1 = document.createElement("li");
  error1.innerHTML="El correo es inválido";
  errores.appendChild(error1);
  flag = false;
}

  if(flag){
  contactos.push({ nombre: nombre, empresa: empresa , email: mail , telefono: telefono});
  document.getElementById("modal").classList.add("modal");
  document.getElementById("modal").classList.remove("modal-open");
  var nombre = document.getElementById("nombre").value="";
  var mail = document.getElementById("email").value="";
  var empresa = document.getElementById("empresa").value="";
  var telefono = document.getElementById("telefono").value="";
  imprimirTodosLosContactos();
  } 
}
imprimirTodosLosContactos();

function validarLongitud(nombres){
  var n = nombres.length;
  if (n >= 2){
    return true;
}else{
    return false;
  }
}

function validarCampoMail(mail){
  var n = mail.length;
  if (n >= 1){
    return true;
}else{
    return false;
  }
}

function validarLongitudMail(correo){
  var n = correo.length;
  if (n >= 6){
      return true;
  } else {
      return false;
  }
}

function validarPrimerCaracter(correo){
if ((correo.charCodeAt(0) >= 65 && correo.charCodeAt(0) <= 90) || (correo.charCodeAt(0) >= 97 && correo.charCodeAt(0) <= 122)){
  return true;
}else{
  return false;
  }
}

function validarArroba(correo){
var cuantasArrobas = 0;
var posArroba = 0;
for (var i=0; i<correo.length; i++){
  if (correo.charAt(i) == "@"){
    cuantasArrobas++;
    posArroba = i;
  }
}

if (cuantasArrobas == 1){
  if (posArroba >=1 && posArroba <= correo.length - 5){
    return true;
  }else{
    return false;
  }
}else{
  return false;
  }	
}

function validarDominio(correo){
var pos = correo.lastIndexOf(".");
if ((correo.length-1 - pos >=2) && (correo.length-1 - pos <=4)){
  for (var i=pos+1; i<correo.length; i++){
    if (correo.charCodeAt(i)<65 || (correo.charCodeAt(i)>90 && correo.charCodeAt(i) < 97) || correo.charCodeAt(i) > 122){
      return false;
      break;
    }
  }
  return true;
}else{
  return false;
  }
}

function imprimirTodosLosContactos(){
  document.getElementById("contactos").innerHTML = "";
  contactos.forEach(imprimirContacto);
}

function eliminarContacto(index){
  contactos.splice(index, 1);
  imprimirTodosLosContactos();
}