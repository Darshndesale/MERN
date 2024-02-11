/* Task
    1> To find out api of songs
    2> fetch the data of sons is required
*/

// This is global section
let song = new Audio();
let folderName = {};

let songs1 = [
  {
    songName: "Kahani suno",
    filePath: "song/song1.mp3",
    coverpath: "coverimg.jpg",
  },
  {
    songName: "Mi Amor",
    filePath: "song/song2.mp3",
    coverpath: "coverimg.jpg",
  },
  {
    songName: "Desparado",
    filePath: "song/song3.mp3",
    coverpath: "coverimg.jpg",
  },
  {
    songName: "Tum Bhula Sako",
    filePath: "song/song4.mp3",
    coverpath: "coverimg.jpg",
  },
  {
    songName: "Deare Mama",
    filePath: "song/song5.mp3",
    coverpath: "coverimg.jpg",
  },
  {
    songName: "Ram Siya-Ram",
    filePath: "song/song6.mp3",
    coverpath: "coverimg.jpg",
  },
];

// To load or list defualt songs in son list
showSongName(songs1);

let songs2 = [
  {
    songName: "Deare Mama",
    filePath: "song/song5.mp3",
    coverpath: "coverimg.jpg",
  },
  {
    songName: "Ram Siya-Ram",
    filePath: "song/song6.mp3",
    coverpath: "coverimg.jpg",
  },
];

// push the all above folders as manualy
folderName.Trend_Song = "songs1";
folderName.Night = "songs2";

for (const key in folderName) {
  console.log(key.replace("_", " "), "=>", folderName[key]);
}

// This is for play demo song 1st
// play.addEventListener("click", () => {
//   let a = "song/song1.mp3";
//   let song1 = new Audio(a);
//   song1.play();
//   console.log(song1.duration, song1.currentSrc, song1.currentTime);
// });

// ************ Listing of Albums ************
let container = document.querySelector(".card-container");
function listFolders(folders) {
  for (const key in folderName) {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="play-btn">
    <svg class="simg" width="14" height="15" viewBox="0 0 16 24">
      <path class="svg_color" fill-rule="evenodd" d="M0 0v24l20-12z"></path>
    </svg>
  </div>
      <img
        src="https://i.scdn.co/image/ab67706f00000002b55b6074da1d43715fc16d6d"
        alt="abc"
      />
      <h2 id="${folderName[key]}">${key.replace("_", " ")}</h2>
      <p>Hits to boost youe mood and fill you with happiness!</p>
  `;
    div.classList.add("card", "black-color-form");
    container.appendChild(div);
  }
}
listFolders(folderName);

// To apply the event listener on container elements
let cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    let song_folder_name = e.currentTarget.children[2];
    console.log(song_folder_name.innerHTML);

    if (song_folder_name.innerHTML == "Night") {
      showSongName(songs2);
    } else if (song_folder_name.innerHTML == "Trend Song") {
      showSongName(songs1);
    }
  });
});

// To show the song names on the library
function showSongName(songs) {
  let list = document.getElementById("uli");
  list.innerHTML = "";
  console.log(list);
  for (let i = 0; i < songs.length; i++) {
    // list.innerHTML = `<li>${songs[i].songName}</li>`;
    // let li = document.createElement("li");
    // li.innerHTML = `<li name=${songs[i].filePath}>
    //     <img src="assets/m.svg" alt="">
    //     <p>${songs[i].songName}</p>
    //     <p>2:00</p>
    //     <img src="assets/player.svg" alt="">
    //   </li>`;
    // list.append(li);

    // try => kam kar gaya
    let li = document.createElement("li");
    li.classList = `${songs[i].filePath}`;
    li.innerHTML = `
        <img src="assets/m.svg" alt="">
        <p>${songs[i].songName}</p>
        <p>2:00</p>
        <img src="assets/player.svg" alt="">
      `;
    list.append(li);
  }
}

// Play song function
function playsong(songName) {
  song.src = songName;
  song.play();
  playImg.src = "assets/play.svg";

  // IMP : The problem is that when we click on multiple songs it play simultaneously
  // solve karenge : Make it one Audeo as Global variable
}

// // Show info function => this write as time update function
function showInfo(songName) {
  document.querySelector(".song-info").innerText = songName;
  // document.querySelector(".time").innerText = "00 : 00";
}

// To play the songs using in which song of li we click
let musics = document.querySelectorAll("#uli");
// Temp
let prevSib;
let nextSib;

musics.forEach((li) => {
  // console.log(li);
  li.addEventListener("click", (e) => {
    let songName = e.target.parentElement.getAttribute("class");
    console.log(songName);
    // call the play song function
    playsong(songName);
    // Show the information on playbar of the song
    let name = e.target.parentElement.children[1].innerText;

    // This song info is cover in time update event
    showInfo(name);

    // Also store the prev and next sibling of current song  => Temp
    prevSib = e.target.parentElement.previousElementSibling;
    console.log(prevSib);
    nextSib = e.target.parentElement.nextElementSibling;
    console.log(nextSib);
  });
});

// Play and pause feature when user click on pause then pause oterwise play also change the incons
let play = document.querySelector("#play");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let playImg = document.getElementById("play");

play.addEventListener("click", () => {
  if (song.paused) {
    song.play();
    // change the icon of play or pause
    playImg.src = "assets/play.svg";
  } else {
    song.pause();
    // change the icon of play or pause
    playImg.src = "assets/pause.svg";
  }
});

// To woek on previous and next btn to play this songs = > Temp
prev.addEventListener("click", () => {
  // This condition is for edege case of prev and next song play if avilable
  playsong(prevSib.getAttribute("class"));
  let name = prevSib.children[1].innerHTML;
  showInfo(name);
  changePrevSib();
});

next.addEventListener("click", () => {
  playsong(nextSib.getAttribute("class"));
  let name = nextSib.children[1].innerHTML;
  showInfo(name);
  changeNextSib();
});

// This is the functions for updating the Prev song and next song to TrackEvent
function changePrevSib() {
  // Reason : When click on prev then we move both prev and next to there prev siblings
  prevSib = prevSib.previousElementSibling;
  nextSib = nextSib.previousElementSibling;
  console.log("click prev");
  console.log(prevSib);
  console.log(nextSib);
}

function changeNextSib() {
  // Reason : When click on next then we move both prev and next to there next siblings
  nextSib = nextSib.nextElementSibling;
  prevSib = prevSib.nextElementSibling;
  console.log("click next");
  console.log(prevSib);
  console.log(nextSib);
}

// This is function to convert the seconds to minuts
function secondsToMinutes(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  // Use string interpolation to format the result as MM:SS
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;

  return formattedTime;
}

// This for time Update event to show time of song : Jab song play hota he tab update hota he
song.addEventListener("timeupdate", () => {
  // console.log(song.currentTime, " / ",  song.duration);
  // document.querySelector(".song-info").innerText = songName;
  document.querySelector(".time").innerText = `${secondsToMinutes(
    song.currentTime
  )} / ${secondsToMinutes(song.duration)}`;

  // to set the seek bar value in percent such that move according to this
  document.querySelector(".circle").style.left =
    (song.currentTime / song.duration) * 100 + "%";
});

// handling movement of seek bar only socus on which percent we move the Circle and change currenttime
let seekbar = document.querySelector(".seekbar");
seekbar.addEventListener("click", (e) => {
  let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
  document.querySelector(".circle").style.left = percent + "%";
  song.currentTime = (song.duration * percent) / 100;
});

// addevent on hamburger
let ham = document.querySelector(".ham");
let sidebar = document.querySelector(".left");
let close = document.querySelector(".cros");

ham.addEventListener("click", () => {
  sidebar.style.left = "0";
});

// To apply event on cros
close.addEventListener("click", () => {
  sidebar.style.left = "-260px";
});

// to find out the range of sound volume to set that
let range = document.querySelector("#range").addEventListener("change", (e) => {
  console.log(e.target.value / 100);
  song.volume = parseInt(e.target.value) / 100;
  // The volume of sound is between 0 , 0.2, ..., 1
});
