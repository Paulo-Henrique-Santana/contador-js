import { form } from '../script.js';

let contador = 0;
let jaEstaAtivo = false;
var count;

export function toggleContador(){
    if(!jaEstaAtivo){
        startContador();
    }else{
        pauseContador();
    }
}

function startContador(){
    jaEstaAtivo = true;
    form.btnToggle.innerText = 'Stop';

    count = setInterval((()=>{
        contador++;
        form.inputContador.value = contador;
    }), 1000)
}

function pauseContador(){
    form.btnToggle.innerText = 'Start';
    jaEstaAtivo = false;
    clearInterval(count);
}

export function resetContador(){
    pauseContador()
    contador = 0;
    
    form.inputContador.value = contador;
}