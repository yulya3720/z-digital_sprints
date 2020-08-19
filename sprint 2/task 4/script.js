// @ts-check
 
console.log("Вызов функции в формате: 'func(N)', где N - целое число в диапазоне [1..2 147 483 647].");

function func(n){
  if(typeof(n) == "number"){
    n = n.toString(2);
    console.log("N(2) = "+ n);
    var max = 0;
    var currentMax = 0;
    for(var i = 1; i < n.length; i++){
      if(n[i-1] == 1 && n[i] == 0){
        currentMax += 1;
      } else if (n[i-1] == 0 && n[i] == 0 && currentMax > 0){
        currentMax +=1
      } else if (n[i-1] == 0 && n[i] == 1 && currentMax > 0){
        if (currentMax > max){
          max = currentMax;
        }
        currentMax = 0;
      }
    }
    console.log("Двоичный пробел: " + max);
  } else {
    console.log("что-то не так с введенными данными");
  }
}