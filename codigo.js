let calculadora = document.querySelector(".calculator");
let calculado = false;

calculadora.addEventListener("click",e =>{
    //consola1 = parte de arriba de la consola
    let consola1 = document.querySelector(".consola1");
    //consola2 = parte de abajo de la consola
    let consola2 = document.querySelector(".consola2");

    //console.log(e);
    let tecla
    let texto
    if(e.target.tagName == "I"){
        tecla = e.path[1]
        //console.log(e.path[1]);
    }else if(e.target.tagName == "SPAN"){
        tecla = e.target;
        //console.log(e.path[0]);
    }

    if(tecla !== undefined){
        
        if(tecla.textContent == "="){
            //Cuando se pone el igual para calcular lo ingresado

            //verifica si hay algun error en el calculo, si hay tira el error, sino el resultado
            try {
                let resultado = eval(consola2.value);
                
                if(resultado == Infinity){
                    consola1.value = "";
                    consola2.value = "MathError"
                }else{
                    texto = `${consola2.value}=`;
                    consola1.value = texto;
                    consola2.value = resultado;
                }
            } catch (error) {
                consola1.value = "";
                let errorEncontrado = error+"";
                let problema = errorEncontrado.split(":");
                //console.log(problema[0]);
                consola2.value = problema[0];
            }
            calculado = true;
            
        }else if(tecla.textContent == "C"){
            //cuando se presiona el boton para reiniciar

            consola1.value= "";
            consola2.value= "";
            calculado = false;

        }else if(isNaN(tecla.textContent)){
            //cuando se presiona alguna tecla que no es un numero
            consola1.value = "";
            calculado = false;
            consola2.value += tecla.textContent;
            //console.log(tecla.textContent);
        }else{
            if(calculado){
                consola1.value = "";
                consola2.value = tecla.textContent;
                calculado = false;
            }else{
                consola2.value += tecla.textContent;
            }
           
        }
    }
})

/*
<span class="num" ><i>^</i></span>
<span class="num" ><i>&radic;</i></span>
<span class="num" ><i>(</i></span>
<span class="num" ><i>)</i></span>
*/
