# Hallar Diagonal principal y inversa de una matriz Bidimensional
## Problema


El problema es que dada una matriz bidimensional de tamaño n*n siendo `n` un número impar. Hallar la diagonal principal y diagonal inversa de esta. Imprimiendo una vez el número que se encuentra en la mitad de esta.

- ![Image text](https://www.aulafacil.com/uploads/cursos/754/editor/matricesydeterminantes012.jpg)

## Solución
La solución fue realizada con el lenguaje de programación JavaScript. Primero se crea el arreglo bidimensional con su respectivo tamaño y luego se llena de 1 hasta n-1 de manera ascedente cada dato agregado al arreglo. Posterior a esto se procede a sacar la diagonal principal y inversa por medio de un for se recorre la matriz bidimensional con dos variables una variable [k] y otra [l]. la variable [k] comienza en desde 0 hasta n-1 y la varibale [l] va de tamaña del arreglo -1 hasta 0. Con esto se logra recorrer la matriz y para imprimirla se hace una condición que pregunta si las variables [k] y [l] son diferentes a la mitad del tamaño de arreglo. diagonal se imprime en la posición de la columna y d ela misma la misma posición siendo arr[k][k] y para la inversa siendo arr[k][l]. de lo contrario imprime la mitad siendo arr[k][l] y estas variables estarían en la posición de la mitad del arreglo.Todo esto se hace si se cumple la condición inicial de que los tamñaos de las filas y la columnas sean impares y iguales.


```sh
const M = 3, N = 3; //Tamaño matriz
if(M%2!=0 && N%2!=0 && M==N){
var arr = new Array(M);           
for (var i = 0; i < M; i++) {
    arr[i] = new Array(N);        
}
var num = 1;
for(var i = 0;i < arr.length;i++){
    for(var j = 0;j<arr[i].length;j++){
        arr[i][j]= num;
        num++;
    }
}


for(var k = 0,l=arr.length-1;k<arr.length;k++,l--){
    if(k!=(arr.length-1)/2 && l!=(arr.length-1)/2){
        console.log(arr[k][k] +"|"+  arr[k][l]);
    }else{
        console.log("-" + arr[k][l] + "-");
    }
}}else{
    console.log("datos erroneos")
}
```
