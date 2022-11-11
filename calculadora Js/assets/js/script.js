function relogio() {
  var data=new Date();
  var hor=data.getHours();
  var min=data.getMinutes();

  if (hor < 10){
     hor="0"+hor;
  }

  if (min < 10){
      min="0"+min;
  }

  var horas= hor + ":" + min;
  document.getElementById("Clock").value=horas;
}
  var timer=setInterval(relogio,1000);