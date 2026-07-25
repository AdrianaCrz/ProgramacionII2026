//Importamos biblioteca para abrir archivos
import { open } from 'node:fs/promises';

console.log("Hola desde clase 2");

let texto = open("demo.txt");

texto.then((data)=>{
    
})

console.log(texto);

console.log('Finalizado');