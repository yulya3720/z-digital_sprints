catFamily = [];
cowFamily = [];
dogFamily = [];
farm = [catFamily, cowFamily, dogFamily]

function Cat(name, age){
  this.name = name;
  this.age = age;
}

function Cow(name, age){
  this.name = name;
  this.age = age;
}

function Dog(name, age){
  this.name = name;
  this.age = age;
}

function addCat(name, age){
  catFamily.push(new Cat(name, age));
}

function addCow(name, age){
  cowFamily.push(new Cow(name, age));
}

function addDog(name, age){
  dogFamily.push(new Dog(name, age));
}

function calcFamilyAge(family){
  var age = 0;
  for(animal of family){
    age += animal.age;
  }
  console.log(age);
  return age;
}

function calcfarmAge(){
  var age = 0;
  for(family of farm){
    age += calcFamilyAge(family);
  }
  console.log(age);
  return age;
}
