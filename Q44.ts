console.log("Sandwich Summary:");
function make_sandwich(...items: string[]): void {
    let summary = "";
    for (const item of items) {
        summary += `  ${item}\n`;
    }
    console.log(summary);
}

make_sandwich("lettuce", "tomato", "cheese");
make_sandwich("turkey", "bacon", "avocado", "mayo");
make_sandwich("peanut butter", "jelly");