let Button  = document.querySelector(".sign")
let inputEmail  = document.querySelector(".email")
let inputPass  = document.querySelector(".pass")



let myTest =new RegExp();
let mytestpassword = new RegExp();

myTest =  / ^\w{3,}@\w{2,}\.\w{2,}$ /i;

mytestpassword = /^\w{6,}$\s/;


Button.addEventListener("click",()=>{

 


if(myTest.test(inputEmail)== true){
  alert('done')
}
else{
alert('no')
}

if(mytestpassword.test(inputPass)== true){
  alert('done')
}
else{
alert('no')
}

})

   





