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
 
//console.log(arr);