function validate() 
{
  var email = document.getElementById("email").value;
  if(!isEmailValid(email))
    return false;
 
  var password = document.getElementById("password").value;  
  if(!isPasswordValid(password))
    return false;

  if(email == "admin@bvc.in" && password == "user1234") 
  {
    window.location.href = "./home.html";
  } 
  else 
  {
    document.getElementById("error").innerHTML = "Email or password is wrong";
  }
}

function isEmailValid(input_email) 
{
  if (input_email.length == 0) 
  { 
    document.getElementById("error").innerHTML = "Email field is empty";
  } 
  else 
  {
    if (input_email.includes("@") && input_email.includes(".")) 
      return true;
    else 
      document.getElementById("error").innerHTML ="Please enter email which includes '@' and '.'";
  }
  return false;
}

function isPasswordValid(input_password) 
{
  if (input_password.length == 0)
  {
    document.getElementById("error").innerHTML = "Password field is empty";
  }
  else
  { 
    if (input_password.length >= 8 && input_password.length <= 10) 
      return true;
    else
      document.getElementById("error").innerHTML = "Please enter password with 8 to 10 character";
  }
  return false;
}