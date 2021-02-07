function formValidate()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var male =  document.getElementById("m");
var female =  document.getElementById("f"); 
if(user_validate(uid,5,12))
 {
  if(pass_validate(passid,7,12))
   {
     if(name(uname))
     {
       if(country(ucountry))
       {
         if(code(uzip))
         {
           if(email_validate(uemail))
           {
              if(gender(male,female))
              {
              } 
            }
          } 
       }
    }
  }
}
return false;

}
 function user_validate(uid,min,max)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= max || uid_len < min)
{
alert("User Id should not be empty / length be between "+min+" to "+max);
uid.focus();
return false;
}
return true;
}
function pass_validate(passid,min,max)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= max || passid_len < min)
{
alert("Password should not be empty / length be between "+min+" to "+max);
passid.focus();
return false;
}
return true;
}
function name(uname)
{ 
var alpha = /^[A-Za-z]+$/;
if(uname.value.match(alpha))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
function country(ucountry)
{
if(ucountry.value == "Default")
{
alert('Select your country from the list');
ucountry.focus();
return false;
}
else
{
return true;
}
}
function code(uzip)
{ 
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
uzip.focus();
return false;
}
}
function email_validate(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
} 
function gender(male,female)
{
x=0;

if(male.checked) 
{
x++;
} 
if(female.checked)
{
x++; 
}
if(x==0)
{
alert('Select Male/Female');
male.focus();
return false;
}
else
{
alert('submitted')
window.location.reload()
return true;
}
}