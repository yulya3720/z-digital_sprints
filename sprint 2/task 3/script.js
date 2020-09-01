
function clone(object){
  var cloned = new Object();
  for (const key in object){
    if(Array.isArray(object[key])){
       cloned[key] = object[key].slice();
    } else if (typeof object[key] === "object"){
      cloned[key] = clone(object[key]);
    } else {
      cloned[key] = object[key];
    }
  }
  return cloned;
}
let animal = {
  name: "animal",
  age: 10,
  childs: ["child 1", "child 2"]
 };
  
 let cat = clone(animal);
 cat.name = "cat";
 cat.age = 5;
 cat.childs.push("child 3");
  
 console.log(cat.name, cat.age); // cat 5
 console.log(cat.childs); // [ 'child 1', 'child 2', 'child 3' ]
  
 console.log(animal.name, animal.age); // cat 5
 console.log(animal.childs); // [ 'child 1', 'child 2', 'child 3' ]
  