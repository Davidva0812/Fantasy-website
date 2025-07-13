document.querySelector('.audio_toggle').addEventListener('click', function() {
            var audio = document.getElementById('background-audio');
            var icon = this.querySelector('i');

            if (audio.paused) {
                audio.play();
                icon.classList.remove('fa-volume-up');
                icon.classList.add('fa-volume-off');
            } else {
                audio.pause();
                icon.classList.remove('fa-volume-off');
                icon.classList.add('fa-volume-up');
            }
        });

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
})