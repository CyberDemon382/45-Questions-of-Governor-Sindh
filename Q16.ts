// Define an array of guests to invite
const guestList: string[] = ["Albert Einstein", "Frida Kahlo", "Leonardo da Vinci"];

// Announce the bigger dinner table
console.log("Good news! We found a bigger dinner table.");

// Add a new guest to the beginning of the array
guestList.unshift("Marie Curie");

// Add another new guest to the middle of the array
const middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Isaac Newton");

// Use push() to add one more guest to the end of the list
guestList.push("Ada Lovelace");

// Print personalized dinner invitations for each guest
for (const guest of guestList) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of delightful conversation and delicious food.`);
}