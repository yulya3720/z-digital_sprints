// @ts-check
console.log("Вызов функции в формате: 'func(x, N1, N2, N3, ...)', где 'x' - позиция другого берега реки, а 'N1, N2, N3, ...' - массив, состоящий из целых чисел."); 

function func(){
  var leaves = Array.from(arguments).slice(1);
  var x = Array.from(arguments)[0];
  var positions = [];
  for(var i = 0; i < x; i++){
    positions.push(false);
  }
  for(var i = 0; i < leaves.length; i++){
    if(positions.every(isTrue)){
      return i - 1;
    } else {
      positions[leaves[i]-1] = true;
    }
  }
  return -1;
}

function isTrue(element){
  return element;
}