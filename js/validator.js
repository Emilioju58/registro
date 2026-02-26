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
    const erroremail = document.getElementById("erroremail");
    const errorage = document.getElementById("errorage");
    const errorphone = document.getElementById("errorphone");

const mensaje = document.getElementsById("message")


//Centinela del conocimiento 
if(nombre --- ""){
errorname.textContent = "El nombre es obligatorio"
valido = false 

}else{
 errorname.textContent = ""

}
}
);




