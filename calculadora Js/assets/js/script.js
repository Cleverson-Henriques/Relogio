const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const teste = document.getElementById("H1");

const Clock = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  
  if (hr < 10) hr = "0" + hr;
   

  if (min < 10) min = "0" + min;
    

  horas.textContent = hr;
  minutos.textContent = min;

  if (hr < 12) {
    periodo = "Bom Dia"; 
  
  } else if (hr > 12 && hr <= 18) {
    periodo = "Boa Tarde";
  
  } else {
    periodo = "Boa Noite";
  
  }
  
  teste.textContent = periodo;
})


