

const solo_btn = document.getElementById("play-game-btn");
const versus_btn = document.getElementById("local-versus-btn");
const exit_btn = document.getElementById("exit-btn");
const main_menu_btn = document.getElementById("story-main-menu-btn");
const return_close_btn = document.getElementById("return-close");
const choice_p2 = document.getElementById("choice-p2");
const choice_pc = document.getElementById("choice-pc");



if (window.location.pathname.endsWith("text_rpg.html")) {
    solo_btn.addEventListener("click", () => {
        window.location.href = "./scenes/play_solo.html";
    });
    versus_btn.addEventListener("click", () => {
        open_choice();

        /**window.location.href = "./scenes/play_versus.html";**/
    });
}
else if (window.location.pathname.endsWith("play_solo.html")) {
    main_menu_btn.addEventListener("click", () => {
        window.close();
        window.location.href = "../text_rpg.html";
    });

}
else if (window.location.pathname.endsWith("play_versus.html")) {
    main_menu_btn.addEventListener("click", () => {
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


function open_choice() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("versus-window").style.display = "block";
    
}

function close_choice() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("versus-window").style.display = "none";
}

function p2_choice(){
    const p2status = document.getElementById("stats-p2");
    p2status.style.visibility = "visible";
    window.location.href = "./scenes/play_versus.html";

};

