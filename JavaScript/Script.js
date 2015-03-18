function holamundo(){
    alert("HOLA MUNDO");
}

function mostrarHoy(){
    var hoy = new Date();
    document.write(hoy.toDateString());
}

function animacion() {
    $("body").hide().fadeIn(3000);
}
//////////////////////////////////
//           prompt             //
//////////////////////////////////
function repiteNombre(){
    var nombre;

    nombre = prompt("Escribe tu nombre", "Misterio");

    if (nombre != null) {
        document.getElementById("demo").innerHTML =
        "Hola " + nombre + "¿Qué tal con el Bootstrap?";
    }
    
}
//////////////////////////////////
//Control del flujo del programa//
//////////////////////////////////
//           if                 //
//////////////////////////////////
function eligeTutor(){
    var tutor;

    tutor = prompt("¿quién es el mejor tutor?", "Francisco");

    if (tutor != null) {
        if(tutor == "Francisco"){
        document.getElementById("tutor").innerHTML =
        "Cierto, " + tutor + " es es mejor!!! (+1) ;-)";
        }else{
        document.getElementById("tutor").innerHTML =
        "Piénsalo mejor.... (-1)";    
        }
    }
    
}
//////////////////////////////////
//Control del flujo del programa//
//////////////////////////////////
//           switch             //
//////////////////////////////////
function eligeTutor2() {
    var tutor;
    var texto = "";

    tutor = prompt("¿quién es el mejor tutor?", "Francisco");

    switch (tutor) {
        case "Francisco":
            texto = "¡Excelente! respuesta correcta (+1) ;-).";
            break;
        case "Carmen":
            texto = "¿Carmen? no habras querido decir Francisco!?";
            break;
        case "Eduardo":
            texto = "¿Eduardo? no habras querido decir Francisco!?";
            break;
        default:
            texto = "¿" + tutor + "?" + " <strong>¿Quién es ese?!</strong>, habras querido decir Francisco!?";
            break;
    }
    document.getElementById("tutor2").innerHTML = texto;
}
//////////////////////////////////
//          jQuery              //
//////////////////////////////////
//           cta1               //
//////////////////////////////////

$(document).ready(function(){
    $('#cta1').click(function(){
        $("#jumbotron").hide();
    });//fin del click
    ////////////////////////////
    $('#cta2').click(function(){
        $("#jumbotron").show();
    });//fin del click
});//fin del ready
//////////////////////////////////
// AÑADIR CONTENIDO A LA PÁGINA //           
//////////////////////////////////
//            .html             //
//////////////////////////////////
$(document).ready(function(){
    $("#dothtml").click(function(){
        alert($("#origen").html());
        $("#destino").html($("#origen").html());
    })//FIN CLICK
    ////////////////////////////////////////////
    $("#dottext").click(function(){
        alert($("#origen").html());
        $("#destino").text($("#origen").html());
    })//FIN CLICK
    ////////////////////////////////////////////
    $("#dotappend").click(function(){
        $("#lista").append("<li>Viernes</li>");
    })//FIN CLICK  
    ////////////////////////////////////////////
    $("#dotprepend").click(function(){
        $("#lista").prepend("<li>Lunes</li>");
    })//FIN CLICK  
    ////////////////////////////////////////////
    $("#dotbefore").click(function(){
        $("#dotbefore").before("<span>b</span>");
    })//FIN CLICK
    $("#dotafter").click(function(){
        $("#dotafter").after("<span>a</span>");
    })//FIN CLICK        
})//FIN READY









