// @ts-check
console.log("Вызов функции в формате: 'func(k, N1, N2, N3, ...)', где 'k' - количество шагов для двига, а 'N1, N2, N3, ...' - массив, состоящий из целых чисел."); 

function func(){
  var array = Array.from(arguments).slice(1);
  var k = Array.from(arguments)[0];
  for(var i = 0; i < k; i ++){
    array.unshift(array.pop());
  }
  console.log(array);
  return array;
}