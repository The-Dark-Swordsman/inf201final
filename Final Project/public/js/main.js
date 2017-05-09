window.onload = function(){
  /* Script Loader v 1.0.0
  * Author: Kyle Barr
  */
  function callScript(scriptName){
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = scriptName;
    document.getElementsByTagName("head")[0].appendChild(script);
    console.log(scriptName + " Called!");
  }

  console.log("Script Loader Loaded!");

  var location = window.location;

  if(location == "http://www.albany.edu/~kb366566/final/thankyou.html"){
    callScript("./js/redirect.js");
  }

  if(location == "http://www.albany.edu/~kb366566/final/contact.html"){
    callScript("./js/validation.js");
  }
}
