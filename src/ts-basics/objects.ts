type Person = {
    name: string,
    age: number,
    adult?: boolean
};

let person1: Person = {
    name: "Walter",
    age: 23
};

console.log(person1);

person1.adult = true;

console.log(person1.adult);

console.log(person1);
