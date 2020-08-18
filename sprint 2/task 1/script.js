console.log("Вызов функции в формате: 'func(rangeStart, rangeEnd, x, division)', где 'rangStart', 'rangeEnd' - числовые значения начала и конца диапазона, 'х' - число-делитель, а 'division' - булевое значение, указывающее, должно ли число делиться на 'x' без остатка.");

function func(rangeStart, rangeEnd, x, division){
  if(typeof(rangeStart) == "number" && typeof(rangeEnd) == "number" && typeof(x) == "number" && (rangeEnd-rangeStart) > 0 && x != 0 && typeof(division) == "boolean"){
    //console.log("rangeStart = " + rangeStart + "\nrangeEnd = " + rangeEnd + "\nx = " + x + "\ndivision = " + division);
     var range = [];
     for(i = 0; i <= rangeEnd - rangeStart; i++){
       range[i] = rangeStart + i;
     }
    var result = [];
    for(var num of range){
      if(division && num%x==0){
          result.push(num);
      } else if (!division && num%x ){
          result.push(num);
      }
    }
      console.log("result: " + result);
  } else {
    console.log("с введенными данными что-то не так");
  }
}