function make_album(artist: string, album_title: string, num_tracks?: number): Record<string, unknown> {
    const album: Record<string, unknown> = {
        "artist name": artist,
        "album title": album_title,
    };

    if (num_tracks !== undefined) {
        album["number of tracks"] = num_tracks;
    }

    return album;
}

const album1 = make_album("Kanye West", "Ye");
console.log(album1);

const album2 = make_album("Adele", "25", 11);
console.log(album2);

const album3 = make_album("The Beatles", "Abbey Road", 17);
console.log(album3);