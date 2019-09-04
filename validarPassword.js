function validarPassword(email) {
  var longitud = validarLongitud(email);
  var primerCaracter = validarPrimerCaracter(email);
  var arroba = validarArroba(email);
  var dominio = validarDominio(email);

  if(longitud && primerCaracter && arroba && dominio) {
    return true;
  }

  return false;
}

function validarLongitud(email) {
  if (email.length >= 6) {
    return true;
  }
  return false;
}

function validarPrimerCaracter(email) {
  if ( 
    (email.charCodeAt(0) >= 65 && email.charCodeAt(0) <= 90) || (email.charCodeAt(0) >= 97 && email.charCodeAt(0) <= 122) 
  ) {
      return true;
  }
  return false;
}

function validarArroba(email) {
  var numeroDeArrobas = 0, posicionArroba;

  for (var i = 0; i < email.length; i++ ) {
    if (email.charAt(i) === "@") {
      numeroDeArrobas++;
      posicionArroba = i;
    }
  }

  if (numeroDeArrobas === 1 && 
      (posicionArroba >=1 && posicionArroba <= email.length - 5)
  ) {
    return true;
  }

  return false;
}

function validarDominio(email) {
  var pos = email.lastIndexOf('.');
  var domLength = email.length - pos - 1;

  // vlaidar que el dominio tenga entre 2 y 4 caracteres
  if ( domLength >= 2 && domLength <= 4 ) {
    // validar que los ultimos caracteres sean letras
    for (var i = pos+1; i < email.length; i++) {
      if ( 
        (email.charCodeAt(i) >= 65 && email.charCodeAt(i) <= 90) || (email.charCodeAt(i) >= 97 && email.charCodeAt(i) <= 122) 
      ) {
          return true;
      }
    }
    return false;
  }
}
