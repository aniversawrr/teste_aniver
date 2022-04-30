import Countdown from "./countdown.js";

const tempoParaOWWB = new Countdown("29 April 2022 23:41:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaOWWB.total[index];
  });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);


setTimeout(function() {
  window.location.href = "presente.html"
}, total);