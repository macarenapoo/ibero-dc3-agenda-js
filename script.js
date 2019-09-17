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
function añadir(){
  document.getElementsByClassName("modal-open");
}
function validarcampos(){
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var primera = validarnombre(nombre);
  var segunda = validaremail(email);
    if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
      return false;
    } else{
      document.getElementById("msg1").innerHTML="El campo Nombre no puede estár vacio";
        document.getElementById("msg1").style.color="#CC0000";
    }
  }
