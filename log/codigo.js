
// document.querySelectorAll('.nav-link').forEach(link => {  
//     link.addEventListener('click', function(event) {  
//         event.preventDefault(); // Evitar el comportamiento por defecto del enlace  

//         // Ocultar todas las secciones  
//         document.querySelectorAll('section').forEach(section => {  
//             section.classList.remove('visible');  
//             section.classList.add('oculto');  
//         });  

//         // Mostrar la sección correspondiente  
//         const targetId = this.getAttribute('data-target');  
//         const targetSection = document.getElementById(targetId);  
//         targetSection.classList.remove('oculto');  
//         void targetSection.offsetWidth; // Trigger reflow  
//         targetSection.classList.add('visible');  
//     });  
// });


        // // JavaScript para mostrar/ocultar secciones  
        // document.addEventListener("DOMContentLoaded", function() {  
        //     const links = document.querySelectorAll(".nav-links a");  
        //     const sections = document.querySelectorAll(".content section");  

        //     links.forEach(link => {  
        //         link.addEventListener("click", function(event) {  
        //             // Prevenir el comportamiento predeterminado del enlace  
        //             event.preventDefault();  
                    
        //             // Ocultar todas las secciones  
        //             sections.forEach(section => section.classList.remove("active"));  

        //             // Obtener el id del destino  
        //             const targetId = this.getAttribute("href").substring(1);  
                    
        //             // Mostrar la sección correspondiente  
        //             const targetSection = document.getElementById(targetId);  
        //             if (targetSection) {  
        //                 targetSection.classList.add("active");  
        //             }  
        //         });  
        //     });  

             // Inicializar la vista mostrando la sección de "Publicaciones"  
           // sections[0].classList.add("active"); // Mostrar la primera sección por defecto  

            // // Manejo de mensajes  
            // const form = document.querySelector(".nuevo-mensaje");  
            // const mensajesDiv = document.querySelector(".mensajes");  

            //  form.addEventListener("submit", function(event) {  
            //      event.preventDefault(); // Evitar el envío del formulario  

            //     const input = document.querySelector("input");  
            //     const nuevoMensaje = input.value; // Obtener el texto del mensaje  
            //     if (nuevoMensaje.trim() === "") return; // Validar  

            //     // Crear un nuevo elemento de mensaje  
            //     const mensajeDiv = document.createElement("div");  
            //     mensajeDiv.classList.add("mensaje", "enviado");  
            //     mensajeDiv.innerHTML = `<strong>Tú:</strong> ${nuevoMensaje}`;  

            //     // Agregar el nuevo mensaje a la sección de mensajes  
            //     mensajesDiv.appendChild(mensajeDiv);  

            //     // Limpiar el campo de entrada  
            //     input.value = "";  
            //     // Scrollear hacia abajo para mostrar el nuevo mensaje  
            //     mensajesDiv.scrollTop = mensajesDiv.scrollHeight;  
            // });  
          
        // });
