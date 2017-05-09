var time = 5;

document.getElementById("redirect").innerHTML = "You Will Be Automatically Redirected In: " + time;

var stop = false;
document.getElementById("stopRedirect").onclick = function(){
  stop = true;
  document.getElementById("stopText").innerHTML = "Stopped";
}

function redirect(){
  if(time == 0){
    if(stop == false){
      window.location = "http://www.albany.edu/~kb366566/final/home.html";
    }
  }else{
    if(stop == false){
      time--;
      document.getElementById("redirect").innerHTML = "You Will Be Automatically Redirected In: " + time;
    }
  }
}

setInterval(redirect, 1000);

document.getElementById("thanks").innerHTML = "Thank You, " + localStorage.name + ", for Submitting your Form!"

console.log("Redirect Loaded");
