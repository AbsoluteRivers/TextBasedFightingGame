

const story_btn = document.getElementById("play-game-btn");
const versus_btn = document.getElementById("local-versus-btn");
const exit_btn = document.getElementById("exit-btn");



story_btn.addEventListener("click", () => {
    window.location.href = "./scenes/play_solo.html";
})




exit_btn.addEventListener("click", () => {
    const confirm_exit = confirm("Are you sure?");
    if (confirm_exit){
        document.close()
    }
    else {
        return
    }
})