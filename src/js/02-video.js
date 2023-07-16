import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);



    const hendlyTimeUpdate = throttle(({seconds}) => {
        
        localStorage.setItem("videoplayer-curent-time", currentTime);
    }, 1000);
    player.on("timeupdate", hendlyTimeUpdate);

const savedTime = localStorage.getItem("videoplayer-curent-time");
if (savedTime) {
    
            player.setCurrentTime(savedTime);
        
};
    
    




