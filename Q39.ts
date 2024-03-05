function city_country(city: string, country: string = "unknown"): string {
    return `${city}, ${country}`;
}

const city1 = city_country("Lahore", "Pakistan");
const city2 = city_country("Tokyo");
const city3 = city_country("Paris", "France");

console.log(city1);
console.log(city2);
console.log(city3);