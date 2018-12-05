window.cipher = {
  encode:(offset,text) => {
  
  let  result = "";
  for (let i= 0; i < text.length; i++){                      //Recorriendo el texto ingresado para encode
    const textMayuscula = text.toUpperCase().charCodeAt(i);  //Extrayendo el código Ascii y convirtiendo a MAYUSCULAS
    if (textMayuscula === 32) {                              //Condición para los ESPACIOS de encode
    result+=  " ";} 
    else {
      result = result + String.fromCharCode((textMayuscula+65+(offset%26))%26+65);} //formula asscii
    }   
  return result;                                              //retorna el resultado encode
  },

  decode:(offset,text) => {
  let  result = "";
  for (let i=0; i < text.length; i++){
    const textMayuscula= text.toUpperCase().charCodeAt(i);
    if (textMayuscula===32) {
    result+=  " ";} 
    else {
      result = result + String.fromCharCode((textMayuscula+65-(offset%26))%26+65);}
    }
  return result;  
  }
};

