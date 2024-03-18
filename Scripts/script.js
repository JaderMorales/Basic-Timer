// variables para almacenar el tiempo
var timer;
var horas = 0;
var minutos = 0;
var segundos = 0;

// funcio para incrementar el tiempo del cronometro 
function iniciarCronometro() {
    segundos++;
    if(segundos >= 60){
       segundos = 0
       minutos++
    if(minutos >= 60){
        minutos = 0
        horas++
    }  
  }

document.getElementById("cronometro").textContent =
    (horas < 10 ? "0" + horas : horas) + ":" +
    (minutos < 10 ? "0" + minutos : minutos) + ":" + 
    (segundos < 10 ? "0" + segundos : segundos);
}


function startStop() {
    if(!timer) {
        timer = setInterval(iniciarCronometro, 1000)
        document.getElementById("startstop").innerHTML = "<i class='ri-stop-fill'></i>"
    } else {
        clearInterval(timer)
        timer = null;
        document.getElementById("startstop").innerHTML = '<i class="ri-play-large-fill"></i>'
    }
}

function reset() {
    clearInterval(timer)
    timer = null
    horas = 0
    minutos = 0
    segundos = 0

    document.getElementById("cronometro").textContent = "00:00:00";
    document.getElementById("startstop").innerHTML = '<i class="ri-play-large-fill"></i>'

}
