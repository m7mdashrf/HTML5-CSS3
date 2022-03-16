// playList creation

const playListCntainer = document.querySelector('.innerPlayList');
const video = document.getElementById('myVideo');

const videos = [
    'Video/2.mp4',
    'Video/1.mp4',
    'Video/3.mp4'
];

const controlers = []
for (let i = 0; i < videos.length; i++) {
    let ele = document.createElement('div');
    ele.className = 'controler'
    ele.innerHTML = `Video ${i+1}`
    playListCntainer.appendChild(ele);
    controlers.push(ele);
}

// switching functionality between videos
for (let i = 0; i < controlers.length; i++) {
    controlers[i].addEventListener('click', (ev) => {
        video.src = videos[i]
        video.play();
    })
}

//play-pause functionality
let isPlaying = false
video.addEventListener('click', (ev) => {
    if (isPlaying) {
        video.pause()
        isPlaying = false
    } else {
        video.play()
        isPlaying = true
    }
})

//double click functionality
video.addEventListener('dblclick', (ev) => {
    video.requestFullscreen();
})