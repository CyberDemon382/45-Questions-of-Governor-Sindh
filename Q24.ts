const fruit1: string = "apple";
const fruit2: string = "banana";

console.log("Is fruit1 equal to fruit2? I predict False.");
console.log(fruit1 === fruit2);

console.log("Is fruit1 not equal to fruit2? I predict True.");
console.log(fruit1 !== fruit2);



const city: string = "New York";

console.log("Is city lowercase 'new york'? I predict True.");
console.log(city.toLowerCase() === "new york");



const num1: number = 10;
const num2: number = 5;

console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);

console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2);



const sunnyDay: boolean = true;
const weekend: boolean = false;

console.log("Is it a sunny day AND a weekend? I predict False.");
console.log(sunnyDay && weekend);

console.log("Is it a sunny day OR a weekend? I predict True.");
console.log(sunnyDay || weekend);



const fruits: string[] = ["apple", "banana", "cherry"];
const searchFruit: string = "banana";

console.log(`Is ${searchFruit} in the fruits array? I predict True.`);
console.log(fruits.indexOf(searchFruit) !== -1);