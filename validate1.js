let email1 = document.getElementById("email1");
let error1 = document.getElementById("error1");
let name = document.getElementById("name");
let phone = document.getElementById("phone");
let password1 = document.getElementById("password1")
function validate1 () {
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if( regexp.test(email1.value)){
        error1.innerHTML ="valid";
        error1.style.color = "green";
        if(name.value == "" || name.value == null){
            error1.innerHTML = "please enter name";
            error1.style.color = "red";
            return false;
        }
        return true;
    }
    else {
    error1.innerHTML = "invalid emailID";
    error1.style.color = "red";
    return false;

    }
}
function phonenumber()
{
  let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (phoneno.test (phone.value)){
      return true;
        }
      else
        {
        error1.innerHTML ="invalid Phone Number";
        error1.style.color= "red";
        return false;
        }
}
function CheckPassword() 
{ 
var pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
if(pwd.test(password1.value)) 
{ 
  if (password1.value>12){
    error1.innerText = "Password is strong";
  }
  else {
    error1.innerText = "Password is weak";
  }
return true;

}
else
{ 
error1.innerHTML = "Password must contain  atlest 1 Lower case 1 uper case , 1 number and minimum length is 8";
error1.style.color= "red";
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

password1.addEventListener('input', function() {
var val = password1.value;
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