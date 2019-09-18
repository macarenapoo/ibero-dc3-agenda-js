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

function nuevoContacto(){
  document.getElementById("modal").classList.remove("modal");
  document.getElementById("modal").classList.add("modal-open");
 vaciar();


  
}

function cancelar(){
  document.getElementById("modal").classList.remove("modal-open");
  document.getElementById("modal").classList.add("modal");
}


function validar(){
  
  var mail = document.getElementById("email").value;
  

  var primera = validarLongitud(mail);

  var segunda = validarPrimerCaracter(mail);
  

  var tercera = validarArroba(mail);
  
  var cuarta = validarDominio(mail);

  var name = document.getElementById("nombre").value;
  var quinta = validarNombre(name);
  



  if (primera){ 
  
      document.getElementById("msg1").innerHTML="El número de caracteres es valido";
      document.getElementById("msg1").style.color="#008000";
  }else{
    
      document.getElementById("msg1").innerHTML="El número de caracteres debe ser un mínimo de 6";
      document.getElementById("msg1").style.color="red";
  }

  
  
  if (segunda){
    
      document.getElementById("msg2").innerHTML="El primer caracter es una letra";
      document.getElementById("msg2").style.color="#008000";
  }else{
    
      document.getElementById("msg2").innerHTML="El primer caracter debe ser una letra";
      document.getElementById("msg2").style.color="red";
  }
 
  
  
  if (tercera){
  
      document.getElementById("msg3").innerHTML="Existe una sola @";
      document.getElementById("msg3").style.color="#008000";
  }else{
 
      document.getElementById("msg3").innerHTML="Existe más de una @";
      document.getElementById("msg3").style.color="red";
  }
 
  
  
  if (cuarta){
  
      document.getElementById("msg4").innerHTML="El dominio es valido";
      document.getElementById("msg4").style.color="#008000";
  }else{
 
      document.getElementById("msg4").innerHTML="El dominio no es válido";
      document.getElementById("msg4").style.color="red";
  }
 
  
  
  if (quinta){ 
    document.getElementById("c1").innerHTML="Campo válido";
  document.getElementById("c1").style.color="green";
    
}else{
  document.getElementById("c1").innerHTML="Campo inválido";
  document.getElementById("c1").style.color="red";

}

 if(primera && segunda && tercera && cuarta && quinta){
   nuevoElemento();
   cancelar();
 }


}
function validarNombre(nombre){
  var n = nombre.length;
  if (n >= 1){
      return true;
  } else {
      return false;
  }
}
function validarLongitud(correo){
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
    }
  }
  return true;
}else{
  return false;
}

}

function imprimirContacto(contacto, index){
var contactos = document.getElementById("contactos");
contactos.insertAdjacentHTML('beforeend',

`<li class="contacto">
<div class="actions">
  <a><i class="fa fa-trash" onclick="eliminarContacto(`+ index +`)"></i></a>
</div>
<i class="userIcon fa fa-user"></i>
<h4 class="nombre">`+contacto.nombre+ `</h4>
<div class="datos">
  <div class="dato">
    <i class="fa fa-building"></i>
    <span>`+contacto.empresa+`</span>
  </div>
  <div class="dato">
    <i class="fa fa-envelope"></i>
    <a href="mailto:`+ contacto.email +`">`+contacto.email+`</a>
  </div>
  <div class="dato">
    <i class="fa fa-phone"></i>
    <a href="tel:`+ contacto.telefono +`">`+contacto.telefono+`</a>
  </div>
</div>
</li>`
);
}

function eliminarContacto(index) {
 contactos.splice(index, 1);
  imprimirTodosLosContactos();
}
function imprimirTodosLosContactos() {
  document.getElementById("contactos").innerHTML = "";
  contactos.forEach(imprimirContacto);
}
function nuevoElemento() {
  
  var contacto = document.getElementById("nombre").value;
  var contacto1 = document.getElementById("empresa").value;
  var contacto2 = document.getElementById("email").value;
  var contacto3 = document.getElementById("telefono").value;
  var nombre = { nombre:contacto, empresa:contacto1, email:contacto2, telefono:contacto3};
  
  contactos.push(nombre);
  imprimirTodosLosContactos();
}


function vaciar(){
   document.getElementById("nombre").value='';
  document.getElementById("empresa").value='';
  document.getElementById("email").value='';
  document.getElementById("telefono").value='';
  document.getElementById("msg1").innerHTML="";
  document.getElementById("msg2").innerHTML="";
  document.getElementById("msg3").innerHTML="";
  document.getElementById("msg4").innerHTML="";
  document.getElementById("c1").innerHTML="";
}
  imprimirTodosLosContactos();



