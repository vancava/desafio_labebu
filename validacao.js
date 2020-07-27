 function verifica() {
        if (document.forms[0].email.value.length == 0) {
          alert('Por favor, informe o seu EMAIL.');
          return false;
          }
            return true;
        }


  function checarEmail(){
    let email = document.forms[0].email.value;

    if( email=="" 
      || email.indexOf('@')==-1 
        || email.indexOf('.')==-1 )
      {
        alert( "Email inválido" );
        return false;
      }
    }        