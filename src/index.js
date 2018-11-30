const btnEmpecemos=document.getElementById("btnEmpecemos");
btnEmpecemos.addEventListener("click",()=>{
  document.getElementById ("contenedor1ero").style.display="none";
  document.getElementById ("contenedor2do").style.display="block";
})

document.getElementById("btncifrado").addEventListener("click", () =>{
const texto = document.getElementById("cajadetexto").value;
let offset = parseInt(document.getElementById("numerodecifrado").value) %26;
let result = window.cipher.encode(offset,texto);
let cifrado =document.getElementById("textocifrado");
cifrado.value = result
});

document.getElementById("btndecifrado").addEventListener("click", () =>{
const texto = document.getElementById("cajadetexto").value;
let offset = parseInt(document.getElementById("numerodecifrado").value) %26;
let result = window.cipher.decode(offset,texto);
let cifrado =document.getElementById("textocifrado");
cifrado.value = result
});








