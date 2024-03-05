// Define an array of travel destinations
const destinations: string[] = [
    "Kyoto",
    "Santorini",
    "Machu Picchu",
    "Reykjavik",
    "Bora Bora"
];

// Print the array in its original order
console.log("Original order:");
console.log(destinations);

// Create a sorted copy of the array (alphabetical order)
const sortedDestinations = [...destinations].sort();
console.log("\nAlphabetical order:");
console.log(sortedDestinations);

// Show that the original array is still unchanged
console.log("\nOriginal order (unchanged):");
console.log(destinations);

// Create a sorted copy in reverse alphabetical order
const reverseSortedDestinations = [...destinations].sort((a, b) => b.localeCompare(a));
console.log("\nReverse alphabetical order:");
console.log(reverseSortedDestinations);

// Show that the original array is still unchanged
console.log("\nOriginal order (unchanged):");
console.log(destinations);

// Reverse the order of the original array
destinations.reverse();
console.log("\nReversed order:");
console.log(destinations);

// Reverse the order again to restore the original order
destinations.reverse();
console.log("\nRestored original order:");
console.log(destinations);

// Sort the array in alphabetical order
destinations.sort();
console.log("\nSorted in alphabetical order:");
console.log(destinations);

// Sort the array in reverse alphabetical order
destinations.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order:");
console.log(destinations);