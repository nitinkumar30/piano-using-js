var audioObj = new Audio();
var songs = ["songs/key01.mp3", "songs/key02.mp3", "songs/key03.mp3", "songs/key04.mp3", "songs/key05.mp3", "songs/key06.mp3", "songs/key07.mp3", "songs/key08.mp3", "songs/key09.mp3", "songs/key10.mp3", "songs/key11.mp3", "songs/key12.mp3", "songs/key13.mp3", "songs/key14.mp3", "songs/key15.mp3", "songs/key16.mp3", "songs/key17.mp3", "songs/key18.mp3", "songs/key19.mp3", "songs/key20.mp3", "songs/key21.mp3", "songs/key22.mp3", "songs/key23.mp3", "songs/key24.mp3"];

function playSong(n) {
    audioObj.src = songs[n];
    audioObj.play();
}
document.onkeydown = (e) => {
    switch (e.keyCode) {
        case 65: // A
            audioObj.src = songs[0];
            audioObj.play();
            break;
        case 83: // S
            audioObj.src = songs[1];
            audioObj.play();
            break;
        case 68: // D
            audioObj.src = songs[2];
            audioObj.play();
            break;
        case 70: // F
            audioObj.src = songs[3];
            audioObj.play();
            break;
        case 71: // G
            audioObj.src = songs[4];
            audioObj.play();
            break;
        case 72: // H
            audioObj.src = songs[5];
            audioObj.play();
            break;
        case 74: // J
            audioObj.src = songs[6];
            audioObj.play();
            break;
        case 75: // K
            audioObj.src = songs[7];
            audioObj.play();
            break;
        case 76: // L
            audioObj.src = songs[8];
            audioObj.play();
            break;
        case 186: // ;
            audioObj.src = songs[9];
            audioObj.play();
            break;
        case 222: // '
            audioObj.src = songs[10];
            audioObj.play();
            break;
        case 220: // \
            audioObj.src = songs[11];
            audioObj.play();
            break;
        case 13: // Enter
            audioObj.src = songs[12];
            audioObj.play();
            break;
    }
};
// volume control
audioObj.volume = 30;

function changeVol(l) {
    audioObj.volume = l / 100;
}