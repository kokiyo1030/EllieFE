'use strict';
// Object
// one of the JavaScript's data type
// a collection of related data and/or fuctionality
// Nearly all objects in JavaScript are instances of Object
// object = { key: value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const taehyeon = {
  name: 'taehyeon',
  age: 25
};
print(taehyeon);

// can add properties later
taehyeon.hasJob = true;
console.log(taehyeon.hasJob);

// can delete properties later
delete taehyeon.hasJob;
console.log(taehyeon.hasJob);

// 2. Computed properties
// key should be always string
console.log(taehyeon.name);
console.log(taehyeon['name']);
taehyeon['hasJob'] = true;
console.log(taehyeon.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(taehyeon, 'name');
printValue(taehyeon, 'age');

// 3. Property value shorthand
const person1 = {
  name: 'bob',
  age: 2
};
const person2 = {
  name: 'steve',
  age: 3
};
const person3 = {
  name: 'dave',
  age: 4
};
const person4 = new Person('taehyeon', 23);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this
}

// 5.in operator: property existence check (key in obj)
console.log('name' in taehyeon);
console.log('age' in taehyeon);
console.log('random' in taehyeon);
console.log(taehyeon.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in taehyeon) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
console.log('');
for (let value of array) {
  console.log(value);
}
console.log('');

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {
  name: 'taehyeon',
  age: '20'
};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for(let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
// const user4 = {};
// Object.assign(user4, user);
// console.log(user4);
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color:'red'};
const fruit2 = {color:'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);