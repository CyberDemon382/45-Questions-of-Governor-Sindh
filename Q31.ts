const usernames: string[] = ["eric", "willie", "admin", "erin", "ever"];

if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    for (const username of usernames) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
    usernames.length = 0; 
    console.log("All usernames have been removed.");
}