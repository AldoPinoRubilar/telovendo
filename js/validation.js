document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector("#login-form");
    let nombre = document.querySelector("#input-name");
    let phone = document.querySelector("#input-number");
    let email = document.querySelector("#input-email");
    let coment = document.querySelector("#inputComentarios");
  
  
    function validate() {

        let nombrevalue = nombre.value;
        if(nombrevalue.length<1){
            document.querySelector("#nombHelp").innerHTML="ingrese su nombre correctamente.";
            return false;
        }
        else{
            document.querySelector("#nombHelp").innerHTML="";
        }
    
      let phonevalue = phone.value;
      if(phonevalue.length<8){
        document.querySelector("#numberHelp").innerHTML="ingresa un numero de teléfono valido";
       return false;  
    }
    else{
        document.querySelector("#numberHelp").innerHTML="";
    }

      let emailValue = email.value;
      let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      console.log(email.value);
  
      if(!emailRegex.test(emailValue)) {
        document.querySelector("#emailHelp").innerHTML = "Por favor, ingresa un correo válido";
        return false;
      } else {
        document.querySelector("#emailHelp").innerHTML = "";
      }
     let comentValue = coment.value;
     if(comentValue.length<15){
        document.querySelector("#comentHelp").innerHTML="Ingrese un mensaje. (minimo 15 caracteres).";
        return false; 
    }
    else{
        document.querySelector("#comentHelp").innerHTML="";
    }
    return true;
    }
    form.addEventListener("submit", function(event) {
      if(!validate()) {
        event.preventDefault();
      } else {
        alert('El formulario se envio correctamente'); 
        document.querySelector("numberHelp").innerHTML=""; 
        document.querySelector("#emailHelp").innerHTML = "";
        document.querySelector("#comentHelp").innerHTML="";
      }
  
  
  
    })
  
  });