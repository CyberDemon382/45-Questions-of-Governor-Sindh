function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`T-Shirt Summary: Size ${size}, Message: "${message}"`);
}

// Example usage:
make_shirt();
make_shirt("medium"); 
make_shirt("small", "TypeScript is amazing!"); 