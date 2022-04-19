window.addEventListener("load",function() {
    let loading = document.getElementById('Loading');
    loading.style.display='none';
});
function toggleAudio() {
    let music=document.querySelector('audio');
    music.muted = !music.muted ;
    let icon = document.querySelector('#Volume-Icon');
    icon.classList.toggle('fa-volume-up');
    icon.classList.toggle('fa-volume-mute');

}