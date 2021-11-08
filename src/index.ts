/*
3) Escribir una función que reciba 2 arreglos de la misma 
longitud por parámetro y devuelva un nuevo arreglo que sea 
una combinación de ambos.

Por ejemplo si invocamos a la función con los parámetros 
[1, 2, 3] y [“a”, “b”, “c”] el resultado debería ser el 
siguiente:

miFuncion([1, 2, 3],[“a”, “b”, “c”] ) => [1, 'a', 2, 'b', 3, 'c']

*/

let vector1: string[] = new Array(3);
let vector2: string[] = new Array(3);

vector1[0] = "1";
vector1[1] = "2";
vector1[2] = "3";

vector2[0] = "a";
vector2[1] = "b";
vector2[2] = "c";

let funcion = function (vector1: string[], vector2: string[]) {
  let vector3: string[] = new Array(6);
  let corte: boolean = false;
  let posicion1: number = 0;
  let posicion3: number = 0;

  while (corte !== true) {
    vector3[posicion3] = vector1[posicion1];
    posicion3 = posicion3 + 1;
    vector3[posicion3] = vector2[posicion1];
    posicion1 = posicion1 + 1;
    posicion3 = posicion3 + 1;
    if (posicion1 === 3) {
      corte = true;
    }
  }
  for (let i = 0; i < 6; i++) {
    console.log(vector3[i]);
  }
};
funcion(vector1, vector2);
