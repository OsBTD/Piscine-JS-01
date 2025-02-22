const samePerson = person; 
const clone1 = Object.assign({}, person);
const clone2 = Object.assign({}, person);
person.age = 78; 
person.country = 'FR' 
console.log('person age is : ', person.age);
console.log('clone1 age is : ', clone1.age);
console.log('clone2 age is : ', clone2.age);

console.log('person country is : ', person.country);
console.log('clone1 country is : ', clone1.country);
console.log('clone2 country is : ', clone2.country);

console.log('same age is : ', samePerson.age);
console.log('same country is : ', samePerson.country);

