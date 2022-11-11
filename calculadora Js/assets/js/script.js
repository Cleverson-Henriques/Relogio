function relogio() {
  var data=new Date();
  var hor=data.getHours();
  var min=dara.getMinutes();

  if (hor < 10){
     hor="0"+hor;
  }

  if (min < 10){
      min="0"+min;
  }

  var horas= hor + ":" + min;
  document.getElementsByClassName("Rel").value=horas;
}
  var timer=setInterval(relogio,1000);