
/* 1 */
if ((nombre == 'Santino') || (nombre == 'Nahuel'))
{
    alert ('Bienvenido alumno favorito')
} else{
    alert ('Bienvenido alumn@')
}

/* 2 */
if (edad >= 18)
{ alert ('sos mayor de edad ')
}else{
    alert ('sos menor de edad')
}

/* 3 */

if ((edadPersona >=6) && ( edadPersona <= 11))
{
    alert ('Sos un niño')
} else if 
    ((edadPersona >=12) && ( edadPersona <= 18))
    {
        alert ('Sos adolescente')
    } else if
    ((edadPersona >=19) && ( edadPersona <= 26))
    {
        alert ('sos un joven')
    } else if
    ((edadPersona >= 27) && ( edadPersona <= 59))
    {
        alert ('Sos una adulto')
    } else if

   (edadPersona >=60) 
   { alert ('Eres un anciano')}
       
        /* 4 */
       let dias=prompt("ingrese un dia para saber si es laboral o no ")
        if( (dias== "sabado") || ("domingo")){
           alert("es fin de semana ")
        }else{
           alert("es un dia laboral") }
   
   /* 5 */
   let contraseña =prompt("ingrese la contraseña")
    
   if(contrtaseña = "secreto"){
       alert("acceso concedido")
   }else {
       alert("acceso denegado")
   }
   /* 8 */
let nota= prompt("ingrese una nota del 0 a 100")


if ((nota >=80) && ( nota <= 100))
{
    alert ('sacaste un MS')
} else if 
    ((nota >=60) && ( nota  <= 80))
    {
        alert ('Sacaste un S')
    } else if
    ((nota >=0) && ( nota <= 59))
    {
        alert ("desaprobaste")
    } 

    /* 9 */
let semana =prompt("ingrese un numero del 1 al 7 para indicar un dia")
if(semana = 1){
    alert("es lunes ")
}else if(semana = 2){
    alert("es martes")
}else if(semana = 3){
    alert("es miercoles")
}else if(semana = 4 ){
    alert("es jueves")
}else if(semana= 5){
    alert("es viernes")
}else if(semana=6){
    alert("es sabado")
}else {
    alert("es domingo")
}

/* 12 */
let Edad= prompt("ingrese su año de nacimiento")
let añoactual= 2023
if(edad ){
    alert("usted tiene " + edad - añoactual)
}else{

}