interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo?: boolean; //el simbolo? significa que puede tener valor null
}

const ana: Usuario = {
    id: 1,
    nombre: "Ana",
    email: "ana@gmail.com",
    activo: true,
}
console.log("Id", ana.id)

//Tipo personalizado
type ID = string | number;

let id: ID = "hola";
let otroId: ID = 3;
let idExtra: ID = false; //Debemos evitar que esto sea posible
console.log(id, otroId, idExtra )

type Estado = "activo" | "inactivo" | "baneado";

let estado: Estado = "juanito";
console.log(estado)

let fecha :string = "18/07/2026";

let numeros: number[] = [1, 2, 3];

let frutas:  Array<string> = ["manzana", "pera"];
let frutas2: string[] = ["manzana", "pera"];

//El tipo se infiere a traves del valor NO RECOMENDADO
let apellido = 10;
//Imprime como texto el tipo de una variable
console.log(typeof apellido); 

function sumar(a: number, b: number): number {
  return a + b;
}
console.log('suma',sumar(10,20))
// Arrow function
const dividir = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("No se puede dividir entre 0");
  }
  return a / b;
};

let saldo = "10.30";
let saldo2 = 10.30;
console.log('comparando saldos', saldo === saldo2);

// Parámetros opcionales
const saludar = (nombre: string, edad?: number): string => {
  return `Hola, ${nombre}${edad ? ` (${edad} años)` : ""}`;
};

const saludar2 = (nombre: string, edad: number = 18): string => {
  return `Hola, ${nombre}${edad ? ` (${edad} años)` : ""}`;
};
console.log(saludar("Marco", 20));
console.log(saludar("Marco"));

console.log(saludar2("Marco", 30));
console.log(saludar2("Marco"));
