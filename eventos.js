document.addEventListener('DOMContentLoaded', function(){

    const buttonContainer = document.querySelector('.button-container');     //Seleccionamos el contenedor del botón

        buttonContainer.addEventListener('click', function() {              //Agregamos el evento click
            alert('¡Hola! Soy el div');                                     //Mostramos una alerta 
        }
    
    )

 const button = document.getElementById('button-saludar');          // Seleccionamos el botón

 button.addEventListener('click', function(event) {               //Agregamos el evento click 
     event.stopPropagation();                                    // Detenemos la propagación del evento al contenedor del botón
     alert('Hola!');                                            //Mostramos una alerta
 });
});
