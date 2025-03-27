/*Selects all the buttons with the "btn" class*/
document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", () => {
      const audioElement = button.nextElementSibling;
      /* Pauses any currently playing audio */
      document.querySelectorAll("audio").forEach((audio) => {
        audio.pause();
        audio.currentTime = 0; /* Reset audio to the beginning */
      });
      /* Removes active class from all buttons */
      document.querySelectorAll(".btn").forEach((btn) => btn.classList.remove("active"));
      audioElement.play();
      button.classList.add("active");
    });
  });
  