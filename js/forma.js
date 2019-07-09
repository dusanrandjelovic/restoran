function proveriKont()  {
 let testname = /^[ ]{0,3}[a-zA-Za-žA-Ž]{2,25}(([' -][ ]*[a-zA-Za-žA-Ž]{2,25})?[a-zA-Za-žA-Ž ]*)*$/g
 let testemail = /^[ ]{0,3}[a-z0-9]+([._]?[a-z0-9]+)*@[a-z0-9]+[.-]?[a-z0-9]+\.[a-z]{2,6}[ ]{0,3}$/g
 let testnumber = /^\d{8,12}$/g
let testmessage = /^[ ]*[a-zA-Za-žA-Ž]{2,}([ -\/\.,:;'"!?\s0-9a-zA-Za-žA-Ž])*$/g

 let name = document.forma.name.value;
 let email = document.forma.email.value;
 let number = document.forma.number.value;
 let message = document.forma.message.value;

 let rezultat1 = name.match(testname);
 let rezultat2 = email.match(testemail);
  let rezultat3 = number.match(testnumber);
 let rezultat4 = message.match(testmessage);

 if (rezultat1 == null)
 {
   alert("Please, write your name!");
   document.forma.name.focus();
 }
 else if(rezultat2 == null)
 {
   alert("Please, write your email!");
   document.forma.email.focus();
 }
else if(rezultat3 == null)
{
  alert("Please, write your number. Only mubers are allowed!");
  document.forma.number.focus();
}
else if(rezultat4 == null)
{
alert("Please, write your message!");
document.forma.message.focus();
}
else {
  document.forma.submit();
//window.open("index.html", "_self");
document.forma.reset();
alert("Form has been sent!");
}
}
