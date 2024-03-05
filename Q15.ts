const guestList: string[] = ["Albert Einstein", "Frida Kahlo", "Leonardo da Vinci"];

const guestWhoCantMakeIt = "Frida Kahlo";
console.log(`${guestWhoCantMakeIt} unfortunately can't make it to dinner.`);

const newGuest = "Marie Curie";
guestList[guestList.indexOf(guestWhoCantMakeIt)] = newGuest;

for (const guest of guestList) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of delightful conversation and delicious food.`);
}