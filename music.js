const music = document.getElementById("bgMusic");

/* RESET MUSIC IF ON INDEX PAGE */

if(window.location.pathname.includes("index.html") || window.location.pathname === "/"){
  localStorage.removeItem("musicTime");
  localStorage.removeItem("musicStarted");
}

/* START FROM SAVED POSITION */

const savedTime = localStorage.getItem("musicTime");

if(savedTime){

  music.currentTime = parseFloat(savedTime);

}

/* SET VOLUME */

music.volume = 0.3;

/* FIRST USER INTERACTION */

document.addEventListener("click", () => {
    music.play().catch(() => {});
  }, { once:true });

/* CONTINUE PLAYING */

window.addEventListener("load", () => {

  const shouldPlay = localStorage.getItem("musicStarted");

  if(shouldPlay === "true"){

    music.play();

  }

});

/* SAVE CURRENT POSITION */

setInterval(() => {

  if(!music.paused){

    localStorage.setItem("musicTime", music.currentTime);

    localStorage.setItem("musicStarted", "true");

  }

}, 1000);