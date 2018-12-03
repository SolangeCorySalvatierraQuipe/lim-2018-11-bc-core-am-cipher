const start=document.getElementById("btnempecemos");
start.addEventListener("click",()=>{
  document.getElementById ("contenedor1ero").style.display="none";
  document.getElementById ("contenedor2do").style.display="block";
})

document.getElementById("btncifrado").addEventListener("click", () =>{
const text = document.getElementById("cajadetexto").value;
let offset = parseInt(document.getElementById("numerodecifrado").value);
let result = window.cipher.encode(offset,text);
let code =document.getElementById("textocifrado");
code.value = result
});

document.getElementById("btndecifrado").addEventListener("click", () =>{
const text = document.getElementById("cajadetexto").value;
let offset = parseInt(document.getElementById("numerodecifrado").value);
let result = window.cipher.decode(offset,text);
let code =document.getElementById("textocifrado");
code.value = result
});













