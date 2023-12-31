let songs = [
    {
        id: 1,
        name: "Naar",
        duration: "2:59",
        songsPath: "./songs/naar.mp3",
        coverPath: "https://i.ytimg.com/vi/qfiuMxB9UNU/maxresdefault.jpg"
    },
    {
        id: 2,
        name: "Toota Jo Kabhi Tara",
        duration: "5:04",
        songsPath: "./songs/tara.mp3",
        coverPath: "https://www.mymp3track.com/wp-content/uploads/2021/07/1625151096529-1536x805.jpg"
    }
    // Add more songs as needed
];


let allSongsArray = [
    {
        id: 1,
        name: "Naar",
        songPath: "./songs/naar.mp3"
    },
    {
        id: 2,
        name: "Toota Jo Kabhi Taara",
        songPath: "./songs/tara.mp3"
    }
];


let currentSongIndex = 0;
let audioElem = new Audio(allSongsArray[currentSongIndex].songPath);

const loopAudioElement = document.getElementById("loopSong");
const loopSongName = document.getElementById("looSongName");

// Function to play the next song
function playNextSong() {
    // Getting Current Song Index
    currentSongIndex = (currentSongIndex + 1) % allSongsArray.length;
    // updating audio loop source
    loopAudioElement.src = allSongsArray[currentSongIndex].songPath;
    loopSongName.innerText = allSongsArray[currentSongIndex].name;
    // Play the song
    loopAudioElement.play();
}

// Start playing the first song
// audioElem.play();

let songIndex = 0;
let audioElement = new Audio(songs[songIndex].songsPath);
let songsList = document.getElementById("songsList");
let masterPlay = document.getElementById("bottomPlayBtn");
let myProgressBar = document.getElementById("myProgressBar");

songs.map((data) => {
      return songsList.innerHTML += `<div id="songElem">
        <img src=${data.coverPath} alt=${data.name} />
        <div id="content">
            <audio controls class="audio songAudioPlayer" id="songAudioPlayer">
                <source src=${data.songsPath} type="audio/mpeg" />
            </audio>
            <div id="contentCover">
                <p style="font-weight: bold; margin-top: 15px;">Song: ${data.name}</p>
                <div id="songInfoContent">
                    <button class="songInfo">Song Info</button>
                    <div style="margin-top: 15px; display: none;" class="songInfoContainer">
                        <h6 style="margin-top: 10px;">Singer Name: Real Boss</h6>
                        <h6 style="margin-top: 10px;">Song Name: Naar</h6>
                        <h6 style="margin-top: 10px;">Duration: 2:59 minutes</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
});

let songAudioPlayer = document.querySelectorAll("#songAudioPlayer");

songAudioPlayer.forEach((player) => {
    player.addEventListener("playing", () => {
        player.style.width = "100%";
    });
    
    player.addEventListener("pause", () => {
        player.style.width = "20%";
    });
});



document.getElementById("loopSong").addEventListener("ended", function () {
    playNextSong();
});