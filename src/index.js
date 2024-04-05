import Song from "./models/Song.js";
import { LinkedList } from "./models/LinkedList.mjs";

const audio = document.querySelector("audio");
const title = document.querySelector(".song-title");
const albumArtwork = document.querySelector(".album-artwork");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const currentTime = document.getElementById("current-time");
const progress = document.getElementById("progress");

const songs = new LinkedList();
songs.push(new Song("Hasta Que Dejes de Respirar", "audio/Caifanes - Hasta Que Dejes de Respirar.mp3", "images/El nervio del volcan.jpeg"));
songs.push(new Song("Ghost - Darkness At The Heart Of My Love", "audio/Ghost - Darkness At The Heart Of My Love.mp3", "images/Impera.jpg"));
songs.push(new Song("José José - Él (Him)", "audio/José José - Él (Him).mp3", "images/Amor amor.jpeg"));
songs.push(new Song("Lady Gaga - Government Hooker", "audio/Lady Gaga - Government Hooker.mp3", "images/Born this way.jpeg"));
songs.push(new Song("Linkin Park - The Catalyst", "audio/Linkin Park - The Catalyst.mp3", "images/A thousands Suns.jpeg"));
songs.push(new Song("Mago de Oz - La Costa Del Silencio", "audio/Mago de Oz - La Costa Del Silencio.mp3", "images/Gaia.jpeg"));
songs.push(new Song("Marina and The Diamonds - Hermit the Frog", "audio/Marina and The Diamonds - Hermit the Frog.mp3", "images/The family jewels.jpeg"));
songs.push(new Song("Soda Stereo - Entre Caníbales", "audio/Soda Stereo - Entre Caníbales.mp3", "images/Cancion animal.jpg"));
songs.push(new Song("Taylor Swift - New Romantics (Taylor's Version)", "audio/Taylor Swift - New Romantics (Taylor's Version).mp3", "images/1989.jpeg"));
songs.push(new Song("Tears For Fears - Everybody Wants To Rule The World", "audio/Tears For Fears - Everybody Wants To Rule The World.mp3", "images/Tears for fears.jpeg"));

let currentSongNode = songs.head;

function change(direction) {
    if (direction === -1 && currentSongNode.previous !== null) {
        currentSongNode = currentSongNode.previous;
    } else if (direction === 1 && currentSongNode.next !== null) {
        currentSongNode = currentSongNode.next;
    }
    uploadAudio(currentSongNode.data);
    audio.play();
}

function uploadAudio(song) {
    title.textContent = song.name;
    audio.src = song.audioSrc;
    albumArtwork.src = song.image;
}

function updateTime() {
    const currentTimeValue = audio.currentTime;
    const duration = audio.duration;

    if (!isNaN(duration)) {
        const progressPercent = (currentTimeValue / duration) * 100;
        progress.style.width = `${progressPercent}%`;
    }

    const minutes = Math.floor(currentTimeValue / 60);
    const seconds = Math.floor(currentTimeValue % 60);
    currentTime.textContent = `${minutes}:${String(seconds).padStart(2, '0')}`;
}

play.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

prev.addEventListener("click", () => {
    change(-1);
});

next.addEventListener("click", () => {
    change(1);
});

audio.addEventListener("timeupdate", updateTime);