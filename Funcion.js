//Recibo un arreglo con varios números y lo devuelvo organizado de menor a mayor y elimino el número mas alto

let organizar = (arreglo) => {
    let aux = 0;
    for(let i=0; i < arreglo.length; i++){
        for(let j=0; j < (arreglo.length-1); j++){
            if(arreglo[j] > arreglo[j+1]){
            aux = arreglo[j];
            arreglo[j] = arreglo[j+1];
            arreglo[j+1] = aux;
            }

        }
    }
    arreglo.pop();
  return arreglo;
}

let arreglo1 = [3,6,2,7,4,8,9,1,0,3];

console.log(organizar(arreglo1));