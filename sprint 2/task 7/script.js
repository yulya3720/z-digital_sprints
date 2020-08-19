console.log("Вызов функции в формате: 'func(N1, N2, N3, ...)', где 'N1, N2, N3, ...' - массив, состоящий из целых чисел.");

function func(){
  var array = Array.from(arguments);
  console.log(array);
  var n = 0;
  for(var i = 0; i < array.length; i++){
    if(array.slice(0, i).indexOf(array[i]) == -1){
      n++;
    }
  }
  console.log(n);
}