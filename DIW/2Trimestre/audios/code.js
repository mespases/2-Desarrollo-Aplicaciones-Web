var audio = document.getElementById("audio")
var progres = document.getElementById("progres")
var p_titulo = document.getElementById("titulo")
var source = document.getElementById("source")
var i = document.getElementById("play")
var img = document.getElementById("img")
var pr = progres.value
var num_current_song = 0

// Variables canciones y imagenes
var list_audios = ["House_of_the_Rising_Sun.mp3", "Metallica_Nothing_Else_Matters.mp3", "Sultans_Of_Swing.mp3", "record.mp3"]
var list_imgs = ["the-animals.jpg", "nothing.jpg", "sultan.jpg", "micro.png"]

audio.addEventListener("timeupdate", function() {
    let time = audio.currentTime
    let duration = audio.duration

    if (time == duration) {
        setNextSong()
    }

    if (pr == progres.value) {
        progres.value = ((time + .25)/duration*100)
        pr = progres.value
    } else {
        audio.currentTime = ((progres.value)*duration/100)
        pr = progres.value
    }

})

function playAudio() {  
    p_titulo.innerHTML = setTitulo()
    
    if (audio.paused) {
        audio.play()
        i.classList.remove("fa-play-circle")
        i.classList.add("fa-pause-circle")

    } else {
        audio.pause()
        i.classList.remove("fa-pause-circle")
        i.classList.add("fa-play-circle")
    }
}

function stopAudio() {
    audio.pause()
    audio.currentTime = 0

    if (audio.paused) {
        i.classList.remove("fa-pause-circle")
        i.classList.add("fa-play-circle")

    }
}

function setTitulo() {  
    let titulo = source.src
    titulo = titulo.split('/')
    titulo = titulo[titulo.length-1].split('_').join(' ')
    titulo = titulo.replace('.mp3', '')


    return titulo
}

function setNextSong() {  
    let actual_song = audio.currentSrc
    actual_song = actual_song.split('/')
    let i = 0
    list_audios.forEach(song => {
        if (actual_song[actual_song.length-1] == song) {
            if (list_audios.length > i+1) {
                source.src = "audio/" + list_audios[i+1]
                num_current_song = i+1
                changeimg()
                audio.load()
                playAudio()
            } else {
                source.src = "audio/" + list_audios[0]
                num_current_song = 0
                changeimg()
                audio.load()
                playAudio()
            }
        }
        i++
    });

}

function setprevSong() {  
    let actual_song = audio.currentSrc
    actual_song = actual_song.split('/')
    let i = 0
    list_audios.forEach(song => {
        if (actual_song[actual_song.length-1] == song) {
            if (i == 0) {
                source.src = "audio/" + list_audios[list_audios.length-1]

                num_current_song = list_audios.length-1
                changeimg()
                audio.load()
                playAudio()
            } else {
                source.src = "audio/" + list_audios[i-1]

                num_current_song = i-1
                changeimg()
                audio.load()
                playAudio()
            }
        }
        i++
    });
}

function random() {
    let num
    do {
        num = Math.floor(Math.random() * (list_audios.length - 0)) + 0
    } while(num == num_current_song)

    num_current_song = num

    source.src = "audio/" + list_audios[num]
    changeimg()
    audio.load()
    playAudio()
}

function changeimg() {
    img.src = "img/" + list_imgs[num_current_song]
}

document.body.onkeyup = function(e) {
    if (e.keyCode == 32) {
        playAudio()
    }
}