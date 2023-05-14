var mysong = document.getElementById("mysong");
var icon = document.getElementById("play");

icon.onclick = function click(){
    if(mysong.paused){
        mysong.play();
        icon.src = "Sound_webpage_img/pause.png";
    }else{
        mysong.pause();
        icon.src = "Sound_webpage_img/play.png";
        
    }
    
}