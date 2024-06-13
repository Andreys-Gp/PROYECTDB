

import React from 'react';

const Div = (res) => {
    return (
        form.addEventListener("submit", e => {
            let entrada1=document.getElementById("primaria").value;
            let entrada2=document.getElementById("segunda").value;
            let entrada3=document.getElementById("tercera").value;
            let elementoResultado=document.getElementById("resultado")
                e.preventDefault();
                
            
            
                
                            let cadena1=String(entrada1);
                            let cadena2=String(entrada2);
                            let cadena3=String(entrada3);
            
                            let funcion1=math.parse(cadena1);
                            let funcion2=math.parse(cadena2);
                            let funcion3=math.parse(cadena3);
            
                            let derivada1=math.derivative(funcion1,"x").toString();
                            console.log(derivada1)
                            let derivada2=math.derivative(funcion2,"y").toString();
                            console.log(derivada2)
                            let derivada3=math.derivative(funcion3,"z").toString();
                            console.log(derivada3)
            
                        let textoREsul="<h2>Divergencia</h2>";
                        textoREsul += `(Ax): ${derivada1}<br>`;
                        textoREsul += `(Ay): ${derivada2}<br>`;
                        textoREsul += `(Az): ${derivada3}<br>`;
            
                        elementoResultado.innerHTML=textoREsul;
                        
            
                
             })
    );
}

export default Div;
