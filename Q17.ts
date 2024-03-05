// Define an array of guests to invite
const guestList: string[] = ["Albert Einstein", "Frida Kahlo", "Leonardo da Vinci", "Marie Curie", "Isaac Newton", "Ada Lovelace"];

// Announce the smaller dinner table
console.log("Unfortunately, we can only invite two people for dinner.");

// Remove guests until only two names remain
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print invitations for the remaining two guests
for (const guest of guestList) {
    console.log(`Dear ${guest}, you are still invited to dinner. Please join us for an evening of delightful conversation and delicious food.`);
}

// Empty the list
guestList.length = 0;
console.log("The guest list is now empty.");