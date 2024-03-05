

const current_users: string[] = ["John", "Alice", "Bob", "Eve", "Mallory"];


const new_users: string[] = ["john", "Charlie", "Bob", "Eve", "dave"];

for (const newUsername of new_users) {
    const lowercaseNewUsername = newUsername.toLowerCase(); // Convert to lowercase for case-insensitive comparison

    if (current_users.some(existingUsername => existingUsername.toLowerCase() === lowercaseNewUsername)) {
        console.log(`Username "${newUsername}" is already taken. Please choose a different one.`);
    } else {
        console.log(`Username "${newUsername}" is available.`);
    }
}