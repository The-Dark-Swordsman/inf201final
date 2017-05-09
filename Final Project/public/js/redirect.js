var time = 5;

document.getElementById("redirect").innerHTML = "You Will Be Automatically Redirected In: " + time;
// button to stop the redirect
var stop = false;
document.getElementById("stopRedirect").onclick = function(){
  stop = true;
  document.getElementById("stopText").innerHTML = "Stopped";
}
// the redirect function
function redirect(){
  if(time == 0){
    // if the button was clicked, stop the redirect
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
// call the redirect function every 1second (1000 ms).
setInterval(redirect, 1000);
// Get the name from localStorage and tell the user Thank You for submitting
document.getElementById("thanks").innerHTML = "Thank You, " + localStorage.name + ", for Submitting your Form!"

console.log("Redirect Loaded");
