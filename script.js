let songs = [
    {
        id: 1,
        name: "Naar",
        duration: "2:59",
        songsPath: "./songs/naar.mp3",
        coverPath: "https://i.ytimg.com/vi/qfiuMxB9UNU/maxresdefault.jpg"
    }
]

// Get Elements
let songIndex = 0;
let audioElement = new Audio('./songs/naar.mp3');
let songsList = document.getElementById("songsList");
let masterPlay = document.getElementById("bottomPlayBtn");
let myProgressBar = document.getElementById("myProgressBar")



songs.map((data) => {
    return (
        songsList.innerHTML +=  `<div id="songElem">
            <img src=${data.coverPath} alt=${data.name} />
            <div id="content">
                <p style="font-weight: bold;">Song: ${data.name}</p>
                <audio controls class="audio" id="songAudioPlayer">
                    <source src=${data.songsPath} type="audio/ogg" />
                </audio>
                <button id="songInfo">Song Info</button>
                <div style="margin-top: 15px; display: none;" id="songInfoContainer">
                    <h6 style="margin-top: 10px;">Singer Name: Real Boss</h6>
                    <h6 style="margin-top: 10px;">Song Name: Naar</h6>
                    <h6 style="margin-top: 10px;">Duration: 2:59 minutes</h6>
                </div>
            </div>
        </div>`
    )
});


let songAudioPlayer = document.getElementById("songAudioPlayer");

songAudioPlayer.addEventListener("playing", () => {
    songAudioPlayer.style.width = "100%";
});

songAudioPlayer.addEventListener("pause", () => {
    songAudioPlayer.style.width = "20%";
});