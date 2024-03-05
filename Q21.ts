const visitDestinations= [
    {
        name: "Mount Everest", type: "Mountain", description: "Highest Peak In the World"
    },
    {
      name: "Amazon River", type: "River", description: "Largest River By Discharge Volume"
    },
    {
        name: "Japan", type: "Country", description: "Rich culture, technology, and cuisine"
    },
    {
        name: "Paris", type: "City", description: "Capital of France with art and Landmarks"
    },
    {
        name: "Spain", type: "Country", description: "A really good place to maintain your health"
    }
];
console.log("Travel Destinations:")
for(const destination of visitDestinations) {
    console.log(`-${destination.name} (${destination.type}): ${destination.description}`);
}