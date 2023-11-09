

function calcularTotal() {

//VARIABLES
var name = document.getElementById('nombre')
var apell = document.getElementById('apellido')
var correo = document.getElementById('mail')
var cant = document.getElementById('cantidad')
var categ = document.getElementById('categoria')

/*if(name.value==="" || apell.value==="" || correo.value==="" || cant.value==="" || categ.value="") {
    //puedo usar la variable o directamente usar el Id para trabjar el elemento.
    //Pero el Id de categoría no los voy a poder usar porque me da un valor diferente segun lo seleccionado
    alert('Debe completar todos los campos')
    name.focus();//focus o foco es donde está la barra para escribir

}*/

//CONSTANTES
const mailValido = mail => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  }
const nameValido = name =>{
    return /^[A-Za-z\s]+$/.test(name);
}
const apellValido = apell =>{
    return /^[A-Za-z\s]+$/.test(apell);
} 
const categValido = categ =>{
    return /[0-3]/.test(categ);
}


//EVALUACIÓN
if(name.value===""){
    alert("Debe completar el nombre")
    name.classList.add("incorrecto");
    name.focus();
    return false;
}

if (!nameValido(name.value)) {
    alert("El nombre ingresado no es válido");
    name.focus();
    name.classList.add("incorrecto"); 
    return false;
}

if (apell.value===""){
    alert("Debe completar el apellido");
    apell.focus(); 
     apell.classList.add("incorrecto");
     return false;
} 

if (!apellValido(apell.value)) {
    alert("El apellido ingresado no es válido");
    apell.focus();
    apell.classList.add("incorrecto");
    return false;
    }

if (mail.value===""){
    alert("Debe completar el mail");
    mail.focus();
    mail.classList.add("incorrecto"); 
    return false;   
} 
if (!mailValido(mail.value)) {
    alert("El e-mail ingresado no es válido");
    mail.focus();
    mail.classList.add("incorrecto"); 
    return false;
}
if (cant.value==="0"){
    alert("Debe serleccionar la cantidad de entradas")
    cant.focus();    
    cant.classList.add("incorrecto"); 
    return false;
}
if (!categValido(categ.value)){
    alert("Debe seleccionar una categoría");
    categ.focus();
    categ.classList.add("incorrecto");
}

name.classList.remove("incorrecto");
apell.classList.remove("incorrecto");
mail.classList.remove("incorrecto");
cant.classList.remove("incorrecto");
categ.classList.remove("incorrecto");

//CÁLCULO

if (categ.value==0){
    resumenTotal= cant.value * 200;
}
if (categ.value==1){
    resumenTotal= cant.value * 200 * .2;
}
if (categ.value==2){
    resumenTotal= cant.value * 200 * .5;
}
if (categ.value==3){
    resumenTotal= cant.value * 200 * .85;
}
document.getElementById("total").innerText = resumenTotal;
}





const BTNCLIK = document.getElementById('btnResumen');
BTNCLIK.addEventListener('click',calcularTotal);