function ValidateEmailAddress(emailString) {
  // check for @ sign
  var atSymbol = emailString.indexOf("@");
  if (atSymbol < 1) return false;

  if(emailString === "") return false;

  var dot = emailString.indexOf(".");
  if (dot <= atSymbol + 2) return false;

  // check that the dot is not at the end
  if (dot === emailString.length - 1) return false;

  return true;
}

function validate(emailString) {
  //get result as true/false
  var Result = ValidateEmailAddress(emailString);

  if (!Result) {
    document.getElementById("error").innerHTML = "Please provide a valid email";
    document.getElementById("emaill").classList.add("invalid");
    document.getElementById("error_img").style.display = "block";
  }
  else
  {
    document.getElementById("error").innerHTML = "";
    document.getElementById("emaill").classList.remove("invalid");
    document.getElementById("error_img").style.display = "none";
  }
}