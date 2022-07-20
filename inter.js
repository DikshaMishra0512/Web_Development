function validate() 
{
  var ChapterNo = document.getElementById("ChapterNo").value;
  if(!isChapterNoValid(ChapterNo))
    return false;
 
  var password = document.getElementById("password").value;  
  if(!isPasswordValid(password))
    return false;

  
}

function isChapterNoValid(input_ChapterNo) 
{
  if (input_ChapterNo.length == 0) 
  { 
    document.getElementById("error").innerHTML = "ChapterNo field is empty";
  } 
  else 
  {
    if (input_ChapterNo.length>=1 && input_ChapterNo.length<=18) 
      return true;
    else 
      document.getElementById("error").innerHTML ="Please enter Chapter Number which is between 1 to 18";
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