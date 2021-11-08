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
vector2[0] = "b";
vector2[0] = "c";

let funcion = function (vector1: string[], vector2: string[]) {
  let vector3: string[] = new Array(6);
  let segundo: number = -1;
  for (let i = 0; i < 6; i++) {
    vector3[i] = vector1[i];
    segundo = segundo + 2;
    vector3[segundo] = vector2[i];
  }
  for (let i = 0; i < 6; i++) {
    console.log(vector3[i]);
  }
};
funcion(vector1, vector2);
