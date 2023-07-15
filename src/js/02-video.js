import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);


player.ready().then(() => {
    const hendlyTimeUpdate = throttle(() => {
        const currentTime = player.getCurrentTime();
        sessionStorage.setItem("videoplayer-curent-time", currentTime);
    }, 1000);
    player.on("timeupdate", hendlyTimeUpdate);

const savedTime = sessionStorage.getItem("videoplayer-curent-time");
if (savedTime) { const currentTime = parseFloat(savedTime);
    player.getDuration().then((duration) => {
        if (currentTime >= 0 && currentTime < duration) {
            player.setCurrentTime(currentTime);
        } else {
            sessionStorage.removeItem("videoplayer-curent-time");
        }
    })
    
}
});


