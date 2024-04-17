import songs from "./Dependencies.js";

class Reproductor {
    constructor() {
        this.currentSongNode = songs.head;
        this.audio = document.querySelector("audio");
        this.title = document.querySelector(".song-title");
        this.albumArtwork = document.querySelector(".album-artwork");
        this.play = document.getElementById("play");
        this.prev = document.getElementById("prev");
        this.next = document.getElementById("next");
        this.currentTime = document.getElementById("current-time");
        this.progress = document.getElementById("progress");

        this.uploadAudio(this.currentSongNode.data);
        this.setupListeners();
    }

    change(direction) {
        if (direction === -1 && this.currentSongNode.previous !== null) {
            this.currentSongNode = this.currentSongNode.previous;
        } else if (direction === 1 && this.currentSongNode.next !== null) {
            this.currentSongNode = this.currentSongNode.next;
        }
        this.uploadAudio(this.currentSongNode.data);
        this.audio.play();
    }

    uploadAudio(song) {
        this.title.textContent = song.name;
        this.audio.src = song.audioSrc;
        this.albumArtwork.src = song.image;
    }

    updateTime() {
        const currentTimeValue = this.audio.currentTime;
        const duration = this.audio.duration;

        if (!isNaN(duration)) {
            const progressPercent = (currentTimeValue / duration) * 100;
            this.progress.style.width = `${progressPercent}%`;
        }

        const minutes = Math.floor(currentTimeValue / 60);
        const seconds = Math.floor(currentTimeValue % 60);
        this.currentTime.textContent = `${minutes}:${String(seconds).padStart(2, '0')}`;
    }

    setupListeners() {
        this.play.addEventListener("click", () => {
            if (this.audio.paused) {
                this.audio.play();
            } else {
                this.audio.pause();
            }
        });

        this.prev.addEventListener("click", () => {
            this.change(-1);
        });

        this.next.addEventListener("click", () => {
            this.change(1);
        });

        this.audio.addEventListener("timeupdate", this.updateTime.bind(this));
    }
}

export default Reproductor;
