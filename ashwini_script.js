
function formValidation()
{
var uname = document.registration.name;
var uemail = document.registration.email;
var umobile=document.registration.mobile.value;
var uadd = document.registration.address.value;


if(allLetter(uname))
{
if(validEmail(uemail))
{
if(validMobile(umobile))
{
if(alphanumeric(uadd))
{ 
}
} 
}
} 
return false;

} 

function allLetter(uname)
{ 
var letters = /^[a-zA-Z-'. ]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Name must have alphabet characters only');
uname.focus();
return false;
}
}
function validEmail(uemail)
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

function validMobile(umobile)
{
if(umobile=="")
{
alert("please Enter the Contact Number");
umobile.focus();
return false;
}
if(isNaN(umobile))
{
alert("Enter the valid Mobile Number(Like : 9566137117)");
umobile.focus();
return false;
}
if((umobile.length < 1) || (umobile.length > 10))
{
alert(" Your Mobile Number must be 1 to 10 Integers");
umobile.select();
return false;
}
	
}

function alphanumeric(uadd)

{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}




