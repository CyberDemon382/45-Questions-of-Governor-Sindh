function describe_city(): void {
    const city: string = prompt("Enter the name of a city")!;
    const country: string = prompt("Enter the country where the city is located (optional):") || "unknown";

    if (country) {
        console.log(`${city} is in ${country}.`);
    } else {
        console.log(`The location of ${city} is unknown.`);
    }
}