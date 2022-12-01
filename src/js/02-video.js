import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';
const playerEl = document.querySelector('#vimeo-player');
const player = new VimeoPlayer(playerEl);
const playerTime = "videoplayer-current-time";

    
    function onTime(data) {
        localStorage.setItem("videoplayer-current-time", data.seconds)
    };
    player.on('timeupdate', throttle(onTime, 1000));
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

 if (localStorage.getItem(playerTime)) {
    player.setCurrentTime(localStorage.getItem(playerTime))
 }
