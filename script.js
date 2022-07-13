import { toggleContador, resetContador } from "./modules/Contador.js";

export const form = document.querySelector('form');

form.addEventListener('submit', (e) => e.preventDefault());
btnToggle.addEventListener('click', toggleContador);
btnReset.addEventListener('click', resetContador)