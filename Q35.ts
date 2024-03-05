const animals: string[] = ["dog", "cat", "rabbit"];

console.log("Animals with a common characteristic:");
for (const animal of animals) {
    console.log(animal);
}

console.log("\nStatements about each animal:");
for (const animal of animals) {
    switch (animal) {
        case "dog":
            console.log(`A ${animal} would make a great pet.`);
            break;
        case "cat":
            console.log(`A ${animal} is an independent and playful companion.`);
            break;
        case "rabbit":
            console.log(`A ${animal} is gentle and enjoys social interaction.`);
            break;
        default:
            console.log(`Unknown animal: ${animal}`);
    }
}

console.log("\nAny of these animals would make a great pet!");