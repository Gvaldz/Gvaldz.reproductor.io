import Song from "../models/Song.js";
import { LinkedList } from "../models/LinkedList.mjs";

const songs = new LinkedList();
songs.push(new Song("Caifanes - Hasta Que Dejes de Respirar", "src/audio/Caifanes - Hasta Que Dejes de Respirar.mp3", "src/images/El nervio del volcan.jpeg"));
songs.push(new Song("Ghost - Darkness At The Heart Of My Love", "src/audio/Ghost - Darkness At The Heart Of My Love.mp3", "src/images/Impera.jpg"));
songs.push(new Song("José José - Él (Him)", "src/audio/José José - Él (Him).mp3", "src/images/Amor amor.jpeg"));
songs.push(new Song("Lady Gaga - Government Hooker", "src/audio/Lady Gaga - Government Hooker.mp3", "src/images/Born this way.jpeg"));
songs.push(new Song("Linkin Park - The Catalyst", "src/audio/Linkin Park - The Catalyst.mp3", "src/images/A thousands Suns.jpeg"));
songs.push(new Song("Mago de Oz - La Costa Del Silencio", "src/audio/Mago de Oz - La Costa Del Silencio.mp3", "src/images/Gaia.jpeg"));
songs.push(new Song("Marina and The Diamonds - Hermit the Frog", "src/audio/Marina and The Diamonds - Hermit the Frog.mp3", "src/images/The family jewels.jpeg"));
songs.push(new Song("Soda Stereo - Entre Caníbales", "src/audio/Soda Stereo - Entre Caníbales.mp3", "src/images/Cancion animal.jpg"));
songs.push(new Song("Taylor Swift - New Romantics (Taylor's Version)", "src/audio/Taylor Swift - New Romantics (Taylor's Version).mp3", "src/images/1989.jpeg"));
songs.push(new Song("Tears For Fears - Everybody Wants To Rule The World", "src/audio/Tears For Fears - Everybody Wants To Rule The World.mp3", "src/images/Tears for fears.jpeg"));

export default songs;
