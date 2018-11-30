window.cipher = {
  encode:(offset,texto) => {
  
  let  result = "";
  for (let i= 0; i < texto.length; i++){
    const textoMayuscula = texto.toUpperCase().charCodeAt(i);
    if (textoMayuscula === 32) {
    result+=  " ";} 
    else {
      result = result + String.fromCharCode((textoMayuscula+65+offset)%26+65);}
    }   
  return result;  
  },

  decode:(offset,texto) => {
  let  result = "";
  for (let i=0; i < texto.length; i++){
    const textoMayuscula= texto.toUpperCase().charCodeAt(i);
    if (textoMayuscula===32) {
    result+=  " ";} 
    else {
      result = result + String.fromCharCode((textoMayuscula+65-offset)%26+65);}
    }
  return result;  
  }
};

