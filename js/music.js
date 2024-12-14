let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');
let playBtn = document.querySelector('.playBtn');
let pauseBtn = document.querySelector('.pauseBtn');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let randomIcon = document.querySelector('.fa-shuffle');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img: '../music/cover/janji.png',
        name: "Janji",
        artist: 'Aziz Harun',
        music: '../music/janji.mp3',
    },
    {
        img: '../music/cover/id-rather-pretend.png',
        name: "i'd rather pretend",
        artist: 'Bryant Barnes',
        music: '../music/id rather pretend.mp3',
    },
    {
        img: '../music/cover/menunggumu.png',
        name: "Menunggumu",
        artist: 'Noah',
        music: '../music/menunggumu.mp3',
    }
];

loadTrack(track_index);

function loadTrack(track_index) {
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = `url(${music_list[track_index].img})`;
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;

    updateTimer = setInterval(setUpdate, 1000);
    curr_track.addEventListener('ended', nextTrack);
}

function reset() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

function randomTrack() {
    isRandom ? pauseRandom() : playRandom();
}

function playRandom() {
    isRandom = true;
    randomIcon.classList.add('randomActive');
}

function pauseRandom() {
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}

function repeatTrack() {
    loadTrack(track_index);
    playTrack();
}

function playpauseTrack() {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
}

function playTrack() {
    curr_track.play();
    isPlaying = true;

    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}

function pauseTrack() {
    curr_track.pause();
    isPlaying = false;

    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
}

function nextTrack() {
    if (track_index < music_list.length - 1 && !isRandom) {
        track_index += 1;
    } else if (track_index < music_list.length - 1 && isRandom) {
        track_index = Math.floor(Math.random() * music_list.length);
    } else {
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}

function prevTrack() {
    if (track_index > 0) {
        track_index -= 1;
    } else {
        track_index = music_list.length - 1;
    }
    loadTrack(track_index);
    playTrack();
}

function seekTo() {
    let seekTo = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekTo;
}

function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}

function setUpdate() {
    if (!isNaN(curr_track.duration)) {
        let seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime % 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration % 60);

        curr_time.textContent = `${String(currentMinutes).padStart(2, '0')}:${String(currentSeconds).padStart(2, '0')}`;
        total_duration.textContent = `${String(durationMinutes).padStart(2, '0')}:${String(durationSeconds).padStart(2, '0')}`;
    }
}