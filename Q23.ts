let car: string = "subaru";

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');


console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda');


console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5);


console.log("Is car.length <= 6? I predict True.");
console.log(car.length <= 6);


console.log("Is car uppercase? I predict False.");
console.log(car === car.toUpperCase());


console.log("Is car not null? I predict True.");
console.log(car !== null);


console.log("Is car an empty string? I predict False.");
console.log(car === '');


console.log("Is car truthy? I predict True.");
console.log(!!car);


console.log("Is car a number? I predict False.");
console.log(!isNaN(Number(car)));

console.log("Is car a string? I predict True.");
console.log(typeof car === 'string');