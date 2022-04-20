let email = document.getElementById("email");
let error = document.getElementById("error");
let password = document.getElementById("password")
function validate () {
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if( regexp.test(email.value)){
        error.innerHTML ="valid";
        error.style.color = "green";
        return true;
    }
    else {
    error.innerHTML = "invalid";
    error.style.color = "red";
    return false;

    }
}
function CheckPassword() 
{ 
var pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
if(pwd.test(password.value)) 
{ 
  if (password1.value>12){
    error.innerText = "Password is strong";
  }
  else {
    error.innerText = "Password is weak";
  }
return true;

}
else
{ 
error.innerHTML = "Password must contain  atlest 1 Lower case 1 uper case , 1 number and minimum length is 8";
error.style.color= "red";
return false;
}
}
var strength = {
    0: "Worst",
    1: "Bad",
    2: "Weak",
    3: "Good",
    4: "Strong"
  }
 
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');

password.addEventListener('input', function() {
  var val = password.value;
  var result = zxcvbn(val);

  // Update the password strength meter
  meter.value = result.score;

  // Update the text indicator
  if (val !== "") {
    text.innerHTML = "Strength: " + strength[result.score]; 
  } else {
    text.innerHTML = "";
  }
});