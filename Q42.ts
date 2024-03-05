function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    return magicians.map((magician) => magician + " the Great");
}

const magician_names: string[] = ["Houdini", "David Copperfield", "Penn & Teller"];
const great_magicians = make_great(magician_names);
show_magicians(great_magicians);