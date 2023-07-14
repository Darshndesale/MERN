console.log("Welcome to spotify")

// add variables girst
let songIdx = 3;
let audi0element
let audioelement = new Audio('song/song1.mp3')
let masterPlay = document.getElementById("masterPlay")
let myprogressBar = document.getElementById('myprogresbar') 
let gif = document.getElementById('gif')


// make the array of song list

let songs = [
    {songName: "Kahani suno", filePath: "song/song1.mp3", coverpath: "coverimg.jpg"},
    {songName: "Mi Amor", filePath: "song/song2.mp3", coverpath: "coverimg.jpg"},
    {songName: "Desparado", filePath: "song/song3.mp3", coverpath: "coverimg.jpg"},
    {songName: "Tum Bhula Sako", filePath: "song/song4.mp3", coverpath: "coverimg.jpg"},
    {songName: "Deare Mama", filePath: "song/song5.mp3", coverpath: "coverimg.jpg"},
    {songName: "Ram Siya-Ram", filePath: "song/song6.mp3", coverpath: "coverimg.jpg"},
    {songName: "Makhana", filePath: "song/song7.mp3", coverpath: "coverimg.jpg"}
]

// start to handle the play and puse

masterPlay.addEventListener('click', ()=>{

    if(audioelement.paused || audioelement.currentTime == 0)
    {
        audioelement.play()
        masterPlay.classList.remove('fa-circle-play')
        
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1

    }
    else{
        gif.style.opacity = 0
        audioelement.pause()
        masterPlay.classList.remove('fa-pause-circle')
        
        masterPlay.classList.add('fa-circle-play')
    }
})

// update the audio.event bar

audioelement.addEventListener ('timeupdate', ()=>{
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100)
    myprogressBar.value = progress

})

myprogressBar.addEventListener('change', ()=>{
    audioelement.currentTime = myprogressBar.value * audioelement.duration/100

})

// play othor musics
const makeAllPlay = () =>{
    Array.from(document.getElementsByClassName('song-play')).forEach(element => {
        element.classList.remove('fa-pause-circle')
         element.classList.add('fa-circle-play')
    });
}
Array.from(document.getElementsByClassName('song-play')).forEach(element => {
    element.addEventListener('click', (e)=>{
       
        makeAllPlay()
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-pause-circle')
        
        audioelement.src = `song/song${songIdx}`
        audioelement.currentTime = 0
        audioelement.play()
        
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-pause-circle')
        
    })
});