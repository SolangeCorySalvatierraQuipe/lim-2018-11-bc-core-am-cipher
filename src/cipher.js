window.cipher = {
  encode:(offset,text) => {
  
  let  result = "";
  for (let i= 0; i < text.length; i++){
    const textMayuscula = text.toUpperCase().charCodeAt(i);
    if (textMayuscula === 32) {
    result+=  " ";} 
    else {
      result = result + String.fromCharCode((textMayuscula+65+(offset%26))%26+65);}
    }   
  return result;  
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

