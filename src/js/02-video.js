import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(currentTime) {
    localStorage.setItem('videoplayer-current-time', currentTime.seconds)
}


player.setCurrentTime(localStorage.getItem('videoplayer-current-time' || 0))