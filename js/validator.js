const formulario = document.getElementById("formulario");

formulario.addEventListener(
"submit",function(event){
    event.preventDefault();

    const nombre = document.getElementById
    ("name").value.trim();
    const edad = document.getElementById
    ("age").value.trim();
    const email = document.getElementById
    ("email").value.trim();
    const phone = document.getElementById
    ("phone").value.trim();


    //Elementos de error
    const errorNombre = document.getElementById("errorname");
    const errorage = document.getElementById("errorage");
    const erroremail = document.getElementById("erroremail");
    const errorphone = document.getElementById("errorphone");

const mensaje = document.getElementById("message");


//Centinela del conocimiento 
let = valido =true;
if(nombre === ""){
errorname.textContent = "El nombre es obligatorio"
valido = false 

}else{
 errorNombre.textContent = ""
}

if(edad === ""){
errorage.textContent = "La edad es obligatorio"
valido = false 

}else{
errorage.textContent = ""
}

if(Correo_Electronico === ""){
erroremail.textContent = "El correo es obligatorio"
valido = false 

}else{
 erroremail.textContent = ""
}

if(Telefono === ""){
errorphone.textContent = "El Telefono es obligatorio"
valido = false 

}else{
 errorphone.textContent = ""
}
}
);
