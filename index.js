setInterval(displayclock,500)
function displayclock(){
  var time= new Date();
  var hrs=time.getHours();
  var min=time.getMinutes();
  

  if(hrs>12){
    hrs=hrs-12;
  }
  if(hrs==0){
    hrs=12;
  }
  if(hrs<12){
    hrs="0"+hrs;
  }
  if(min<10){
    min="0"+min
  }
  document.getElementById("demo").innerHTML=hrs +" : "+ min;
  document.getElementById("demo1").innerHTML=hrs +" : "+ min;

}
