// this adds events to the elements (because of the way HTML works it's needed)
function addEvent( obj, type, fn ) {
  if ( obj.attachEvent ) {
    obj['e'+type+fn] = fn;
    obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
    obj.attachEvent( 'on'+type, obj[type+fn] );
  } else{
    obj.addEventListener(type, fn, false);
  }
}
// add event to inputs
var input = document.getElementsByTagName("input");
for(var i = 0; i < input.length; i++){
  addEvent(input[i], 'blur', validate);
}
// add event to textarea
var textarea = document.getElementsByTagName("textarea");
for(var i = 0; i < textarea.length; i++){
  addEvent(textarea[i], 'blur', validate);
}

// validate the field
function validate(){
  current = this.nextSibling;
  if(this.value == ""){
    /* this iterates over the tags until it finds the next <p> tag, which
    * because of the way this form is laid out, there won't be any issues
    */
    while(current.tagName != "P"){
      var lastTag = current;
      current = lastTag.nextSibling;
    }
    current.innerHTML = "this field can not be left blank";
    isEmpty = true;
  }else{
    // same iteration as above
    while(current.tagName != "P"){
      var lastTag = current;
      current = lastTag.nextSibling;
    }
    current.innerHTML = "";
  }
}

function validateForm(){
  // checks if the input values of name, subject, and email are empty before submitting the form
  var boo1 = false;
  for(var i = 2; i < input.length; i++){
    if(input[i].value == ""){
      boo1 = false;
    }else{
      boo1 = true;
    }
  }
// checks if the textarea of message is empty before submitting the form
  var boo2 = false;
  for(var i = 0; i < textarea.length; i++){
    if(textarea[i].value == ""){
      boo2 = false;
    }else{
      boo2 = true;
    }
  }
  // if either of them are empty, don't submit the form; otherwise, do
  if(boo1 == false || boo2 == false){
    return false;
  }else{
    localStorage.name = input[2].value;
    return true;
  }
}

console.log("Validation Loaded!");
