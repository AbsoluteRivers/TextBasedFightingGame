

const solo_btn = document.getElementById("play-game-btn");
const versus_btn = document.getElementById("local-versus-btn");
const exit_btn = document.getElementById("exit-btn");
const solo_main_menu_btn = document.getElementById("story-main-menu-btn")




if (window.location.pathname.endsWith("text_rpg.html")) {
    solo_btn.addEventListener("click", () => {
        window.location.href = "./scenes/play_solo.html";
    });
    versus_btn.addEventListener("click", () => {
        window.location.href = "./scenes/play_versus.html";
    });
}
else if (window.location.pathname.endsWith("play_solo.html")) {
    solo_main_menu_btn.addEventListener("click", () => {
        window.close();
        window.location.href = "../text_rpg.html";
    });

}
else if (window.location.pathname.endsWith("play_versus.html")) {
    solo_main_menu_btn.addEventListener("click", () => {
        window.close();
        window.location.href = "../text_rpg.html";
    });
}


exit_btn.addEventListener("click", () => {
    const confirm_exit = confirm("Are you sure?");
    if (confirm_exit){
        window.close()
    }
    else {
        return
    }
});
