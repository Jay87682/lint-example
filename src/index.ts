interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: 'Tom',
  age: 25,
};

if (tom.age === 25) {
  console.log(tom.name.concat('is 25 years old.'));
}
