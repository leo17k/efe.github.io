
const inputeditar = document.getElementById("usuario");
const editarperfil = document.getElementById("editar-perfil"); //botoon
const diviput = document.getElementById("input-editar");
const nombredeusuario = document.getElementById("nombre-usuario");
const infomacion = document.getElementById("informacion");
const guardar= document.getElementById("guardar");
const correo =document.getElementById("Correo");
const tlf =document.getElementById("tlf");
const publ = document.getElementById ("publ");
const publb = document.getElementById ("publb")

editarperfil.addEventListener("click", ()=>{
    diviput.style.display = "block";
    infomacion.style.display = "none";
    guardar.style.display = "inline";
    publ.style.display = "none";
publb.style.display = "none";

});



guardar.addEventListener("click", ()=>{
    infomacion.style.display = "flex";
    diviput.style.display = "none";
    guardar.style.display = "none";
    publ.style.display = "block";
publb.style.display = "block"

});


const tlf2 = document.getElementById("tlf2")

const email = document.getElementById("Email");
   
correo.addEventListener("change", (e) =>{
    email.textContent = e.target.value;
   });
tlf.addEventListener("change", (e) =>{
    tlf2.textContent = e.target.value;
   });




inputeditar.addEventListener("change", (e) =>{
 nombredeusuario.textContent = e.target.value;
});


// Obtener el input de archivo y la imagen de previsualización  
const imagenInput = document.getElementById('imagen-perfil');  
const previewImagen = document.getElementById('preview-imagen');  

// Agregar un evento 'change' al input de archivo  
imagenInput.addEventListener('change', function(event) {  
    // Obtener el archivo seleccionado  
    const file = event.target.files[0];  

    // Crear un objeto URL para la imagen  
    const imageUrl = URL.createObjectURL(file);  

    // Establecer la URL de la imagen en el elemento <img>  
    previewImagen.src = imageUrl;  
});



