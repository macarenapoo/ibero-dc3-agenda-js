var contactos = [
  {nombre: "Ana López", 
   empresa: "Ibero", 
   email: "analopez@gmail.com", 
   telefono: "55555555" },
];


var contactos2 = [
   {nombre: "Macarena Poo García", 
    empresa: "Retail Zipline", 
    email: "macarenapoo@gmail.com", 
    telefono: "5556801216" },
];
    var contactos3 = [
  { nombre: "Juan Fernando Donoso", 
    empresa: "Universidad Iberoamericana", 
    email: "juan.donoso@uia.mx", 
    telefono: "5555555555" },
    
];


var contactos4 = new Array();


function imprimirContacto(contacto, index){ //con index sabe que posición es, si es 0, 1, 2, 3...
  var lista = document.getElementById("lista");
  lista.insertAdjacentHTML('beforeEnd',`<li class="contacto" )>
  <div class="actions">
  <a><i class= "fa fa-trash" onClick="eliminarAgenda0(` + index + `)"></i></a>
  </div>
  <i class="userIcon fa fa-user"></i>
  <h4 class="nombre">` + contacto.nombre + `</h4>
  <div class="datos">
  <div class="dato">
   <i class="fa fa-building"></i>
   <span>` + contacto.empresa + `</span>
   </div>
   <div class="dato">
   <i class="fa fa-envelope"></i>
   <a href="analopez@gmail.com">` + contacto.email + `</a>
   </div>
   <div class="dato">
   <i class="fa fa-phone"></i> 
   <a href="tel:55555555">` + contacto.telefono + `</a>
   </div>
   </div>
    </li>`
  );
  }
  
  function imprimirTodosLosContactos(){
    document.getElementById("lista").innerHTML = "";
    contactos.forEach(imprimirContacto); //aqui va contando uno por uno, 0, 1, 2, etc.
    }
    
    imprimirTodosLosContactos();
  
    
  function eliminarAgenda0(index){
    contactos.splice(index, 1);
    imprimirTodosLosContactos();
       }


function imprimirContacto2(contacto2, index){ //con index sabe que posición es, si es 0, 1, 2, 3...
var lista2 = document.getElementById("lista2");
lista2.insertAdjacentHTML('beforeEnd',`<li class="contacto" )>
<div class="actions">
<a><i class= "fa fa-trash" onClick="eliminarAgenda1(` + index + `)"></i></a>
</div>
<i class="userIcon fa fa-user"></i>
<h4 class="nombre">` + contacto2.nombre + `</h4>
<div class="datos">
<div class="dato">
 <i class="fa fa-building"></i>
 <span>` + contacto2.empresa + `</span>
 </div>
 <div class="dato">
 <i class="fa fa-envelope"></i>
 <a href="macarenapoo@gmail.com">` + contacto2.email + `</a>
 </div>
 <div class="dato">
 <i class="fa fa-phone"></i> 
 <a href="tel:5556801216">` + contacto2.telefono + `</a>
 </div>
 </div>
  </li>`
);
}

function imprimirTodosLosContactos2(){
  document.getElementById("lista2").innerHTML = "";
  contactos2.forEach(imprimirContacto2); //aqui va contando uno por uno, 0, 1, 2, etc.
  }
  
  imprimirTodosLosContactos2();

  
function eliminarAgenda1(index){
  contactos2.splice(index, 1);
  imprimirTodosLosContactos2();
     }
  

function imprimirContacto3(contacto3, index){ 
var lista3 = document.getElementById("lista3");
lista3.insertAdjacentHTML('beforeEnd',`<li class="contacto" )>
<div class="actions">
<a><i class= "fa fa-trash" onClick="eliminarAgenda2(` + index + `)"></i></a>
</div>
<i class="userIcon fa fa-user"></i>
<h4 class="nombre">` + contacto3.nombre + `</h4>
<div class="datos">
<div class="dato">
 <i class="fa fa-building"></i>
 <span>` + contacto3.empresa + `</span>
 </div>
 <div class="dato">
 <i class="fa fa-envelope"></i>
 <a href="juan.donoso@uia.mx">` + contacto3.email + `</a>
 </div>
 <div class="dato">
 <i class="fa fa-phone"></i> 
 <a href="5555555555">` + contacto3.telefono + `</a>
 </div>
 </div>
  </li>`
);
}

function imprimirTodosLosContactos3(){
document.getElementById("lista3").innerHTML = "";
contactos3.forEach(imprimirContacto3); //aqui va contando uno por uno, 0, 1, 2, etc.
}

imprimirTodosLosContactos3();

  
function eliminarAgenda2(index){
  contactos3.splice(index, 1);
  imprimirTodosLosContactos3();
     }


function imprimirContacto4(contacto4, index){ //con index sabe que posición es, si es 0, 1, 2, 3... lo cual en este caso solo se usaria para borrar las agendas que hagamos
  var lista4 = document.getElementById("lista4");
  lista4.insertAdjacentHTML('beforeEnd',`<li class="contacto" )>
  <div class="actions">
  <a><i class= "fa fa-trash" onClick="eliminarAgenda3(` + index + `)"></i></a>
  </div>
  <i class="userIcon fa fa-user"></i>
  <h4 class="nombre">` + contacto4.nombre + `</h4>
  <div class="datos">
  <div class="dato">
   <i class="fa fa-building"></i>
   <span>` + contacto4.empresa + `</span>
   </div>
   <div class="dato">
   <i class="fa fa-envelope"></i>
   <a href="email">` + contacto4.email + `</a>
   </div>
   <div class="dato">
   <i class="fa fa-phone"></i> 
   <a href="telefono">` + contacto4.telefono + `</a>
   </div>
   </div>
    </li>`
  );
  }



function imprimirMasContactos(){
document.getElementById("lista4").innerHTML = ""; //esto es necesario para que no se duplique
contactos4.forEach(imprimirContacto4); 

}
/*No es necesario usar onclick="agregarMasAgendas()" 
porque se está usando function cerrarFormularioAgregandoContacto()

function agregarMasAgendas(){  
  contactos3.push ({ nombre: dato, empresa: dato2, email: dato3, telefono: dato4 }); 
  imprimirMasContactos();
}*/

function eliminarAgenda3(index){
  contactos4.splice(index, 1);
  imprimirMasContactos();
     }

     


   //para abrir el formulario con + Nuevo Contacto
   function abrirFormulario(){
    document.getElementById('modal').style.display='block';
    document.getElementById("tx1").value = ''; //para borrar el texto una vez que debmos a +Nuevo Contacto
    document.getElementById("tx1").style.borderColor=""; //quitar borde de campo verde
      document.getElementById("msg").innerHTML=""; //quitar palomita 
    document.getElementById("tx2").value = '';
    document.getElementById("tx2").style.borderColor=""; //quitar borde de campo verde
        document.getElementById("msg2").innerHTML=""; //quitar palomita
    document.getElementById("em").value = '';
    document.getElementById("em").style.borderColor=""; //quitar borde de campo verde
      document.getElementById("msg3").innerHTML=""; //quitar palomita 
    document.getElementById("tx3").value = '';
    document.getElementById("tx3").style.borderColor=""; //quitar borde de campo verde
    document.getElementById("msg4").innerHTML=""; //quitar palomita 
   }
    
 //para cerrar el formulario con la X
   function cerrarFormulario(){
    document.getElementById('modal').style.display='none';
}
//para cerrar el formulario agregando contacto
function cerrarFormularioAgregandoContacto(){
  
 validarDatos();
}

  
function validarDatos(){
  
 
/*leemos los campo del formulario*/
  var text = document.getElementById("tx1").value;
  var text2 = document.getElementById("tx2").value;
  var text3 = document.getElementById("tx3").value;
  
  /* para validar el email vamos a checar lo siguiente:
  1. Que el string ingresado tenga 6 o más caracteres
  2. El primer caracter debe ser una letra
  3. Debe haber una sola @ y debe ocupar una posición mayor o igual a 1 dentro del string
  4. Después del último punto (.) deben haber mínimo 2 letras y máximo 4
  Se considera que un email válido debe tener una estructura mínima de: x@x.xx
  */
  var mail = document.getElementById("em").value;
     
 
  if (text==""){
      document.getElementById("tx1").style.borderColor="#CC0000"; //borde de campo rojo
      document.getElementById("msg").innerHTML="Debes llenar este campo"; 
      document.getElementById("msg").style.color="#CC0000";  //color de mensaje rojo
      document.getElementById('modal').style.display='block';
     /* document.getElementById('lista3').style.display='none';*/
      
      
    
  }else{
      document.getElementById("tx1").style.borderColor="#00CC00"; //borde de campo verde
      document.getElementById("msg").innerHTML=" &#10003;"; //codigo de palomita sacado de internet
      document.getElementById("msg").style.color="#00CC00"; //color de mensaje verde 
      document.getElementById('modal').style.display='none'; //este solo va una vez
      /*document.getElementById('lista3').style.display='';*/
      
      
       }


       if (text2==""){
        document.getElementById("tx2").style.borderColor="#00CC00"; //borde de campo verde
        document.getElementById("msg2").innerHTML="Este campo es opcional"; //codigo de palomita sacado de internet
        document.getElementById("msg2").style.color="#00CC00"; //color de mensaje verde
    }else{
        document.getElementById("tx2").style.borderColor="#00CC00"; //borde de campo verde
        document.getElementById("msg2").innerHTML=" &#10003;"; //codigo de palomita sacado de internet
        document.getElementById("msg2").style.color="#00CC00"; //color de mensaje verde 
       }
       if (text3==""){
        document.getElementById("tx3").style.borderColor="#00CC00"; //borde de campo verde
        document.getElementById("msg4").innerHTML="Este campo es opcional"; //codigo de palomita sacado de internet
        document.getElementById("msg4").style.color="#00CC00"; //color de mensaje verde
    }else{
        document.getElementById("tx3").style.borderColor="#00CC00"; //borde de campo verde
        document.getElementById("msg4").innerHTML=" &#10003;"; //codigo de palomita sacado de internet
        document.getElementById("msg4").style.color="#00CC00"; //color de mensaje verde 
       }
  if (mail == ""){
  document.getElementById("em").style.borderColor="#CC0000";
  document.getElementById("msg3").innerHTML=" el campo email es obligatorio";
  document.getElementById("msg3").style.color="#CC0000"; 
  document.getElementById('modal').style.display='block';
 /* document.getElementById('lista3').style.display='none';*/
 


  }else{

  validarEmail(mail);
          }
        }
  
  function validarEmail(mail){
  /* corremos la función para validar la longitud del string ingresado*/
  var primera = validarLongitud(mail);
          
  /* corremos la función para validar que el primer caracter ingresado sea una letra*/
  var segunda = validarPrimerCaracter(mail);
                          
  /* corremos la función para validar que haya una sola arroba, que ésta ocupe una posición
   mayor o igual a 1, dentro del string, y menor o igual a longitud del string menos 5 */
   var tercera = validarArroba(mail);
                          
  /* corremos la función para validar el dominio, que implica que después del último punto
  deben haber entre 2 y 4 letras máximo*/
  var cuarta = validarDominio(mail);
     
  if (primera && segunda && tercera && cuarta){
      //email válido
      document.getElementById("em").style.borderColor="#00CC00";
      document.getElementById("msg3").innerHTML=" &#10003;"; //este codigo de la palomita fue sacado de internet
      document.getElementById("msg3").style.color="#00CC00";
      //document.getElementById('modal').style.display='none'; este no debe ir aqui
      
      

  }else{
      //email inválido
      document.getElementById("em").style.borderColor="#CC0000";
      document.getElementById("msg3").innerHTML="Ingrese un email valido";
      document.getElementById("msg3").style.color="#CC0000";
      document.getElementById('modal').style.display='block';
      /*document.getElementById('lista3').style.display='none';*/
      }
      
   
  var dato = document.getElementById("tx1").value;
  var dato2 = document.getElementById("tx2").value;
  var dato3 = document.getElementById("em").value;
  var dato4 = document.getElementById("tx3").value;
 
 
//con esto se agrega la agenda: al momento de validar el nombre y el email
  if(dato && primera && segunda && tercera && cuarta){
    contactos4.push ({ nombre: dato, empresa: dato2, email: dato3, telefono: dato4 }); 
    imprimirMasContactos();
   
  }else{

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
        /* checamos que el código UTF del primer caracter corresponda a una letra, mayúscula o minúscula*/
        if ((correo.charCodeAt(0) >= 65 && correo.charCodeAt(0) <= 90) || (correo.charCodeAt(0) >= 97 && correo.charCodeAt(0) <= 122)){
          return true;
        }else{
          return false;
        }
  
      }
  
      function validarArroba(correo){
        /*checamos que haya una sola arroba y que ocupe una posición mayor o igual a 1 y menor o igual
        a longigud del string - 5, dentro del string*/
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
        /*checamos la última ocurrencia de un punto*/
        var pos = correo.lastIndexOf(".");
        if ((correo.length-1 - pos >=2) && (correo.length-1 - pos <=4)){
          /*ahora checamos que estos últimos 2 a 4 caracteres del string sean letras*/
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

