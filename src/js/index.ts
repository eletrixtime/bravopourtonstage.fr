const text = document.getElementById("text")!;
const button = document.getElementById("button")!;
const video = document.getElementById("video") as HTMLVideoElement;

button.addEventListener(
  "click",
  () => {
    button.hidden = true;
    video.hidden = false;
    video.play();
    video.volume = 1;
    video.requestFullscreen();

    video.addEventListener(
      "ended",
      () => {
        video.hidden = true;
        text.hidden = false;
      },
      { once: true },
    );
  },
  { once: true },
);
