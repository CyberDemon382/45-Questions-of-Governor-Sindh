function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magician_names: string[] = ["Houdini", "David Copperfield", "Penn & Teller"];
show_magicians(magician_names)