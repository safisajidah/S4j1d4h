const playlistElement = document.getElementById('playlist');

async function getTrackDuration(src) {
    return new Promise((resolve) => {
        const audio = new Audio(src);
        audio.addEventListener('loadedmetadata', () => {
            const minutes = Math.floor(audio.duration / 60);
            const seconds = Math.floor(audio.duration % 60).toString().padStart(2, '0');
            resolve(`${minutes}:${seconds}`);
        });
    });
}

async function loadPlaylist() {
    for (let i = 0; i < music_list.length; i++) {
        const track = music_list[i];
        const li = document.createElement('li');
        const duration = await getTrackDuration(track.music);

        li.innerHTML = `
            <i id="plist_playbtn" class="fa-solid fa-play"></i>
            <h1 id="plist_count">#${i + 1}</h1>
            <img src="${track.img}" alt="Cover">
            <div class="track-details">
                <div>
                    <div><strong>${track.name}</strong></div>
                    <div id="plist_artistName">${track.artist}</div>
                </div>
                <div class="track-duration">${duration}</div>
            </div>
        `;
        li.addEventListener('click', () => {
            loadTrack(i);
            playTrack();
        });
        playlistElement.appendChild(li);
    }
}

loadPlaylist();
