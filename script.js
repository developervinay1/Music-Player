let songs = [
    {
        id: 1,
        name: "Sufna Banke",
        duration: "2:59"
    },
    {
        id: 1,
        name: "Sufna Banke",
        duration: "2:59"
    },
    {
        id: 1,
        name: "Sufna Banke",
        duration: "2:59"
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
            <img src="https://c.saavncdn.com/040/Sufna-Banke-Punjabi-2021-20211016000424-500x500.jpg" alt="" />
            <div id="content">
                <p style="font-weight: bold;">${data.name}</p>
                <p style="margin-top: 10px;">Duration: ${data.duration}</p>
                <button>Play Now</button>
            </div>
        </div>`
    )
})

masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.innerHTML = ` <span id="bottomPlayBtn"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"   stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>      
        </span>`
    } else {
        audioElement.pause();
        masterPlay.innerHTML = ` <span id="bottomPlayBtn"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
    </svg>
</span>`
    }
})

audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value* audioElement.duration/100;
})