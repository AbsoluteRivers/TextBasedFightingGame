

const solo_btn = document.getElementById("play-game-btn");
const versus_btn = document.getElementById("local-versus-btn");
const exit_btn = document.getElementById("exit-btn");
const main_menu_btn = document.getElementById("story-main-menu-btn");
const return_close_btn = document.getElementById("return-close");
const choice_p2 = document.getElementById("choice-p2");
const choice_pc = document.getElementById("choice-pc");
const p2status = document.getElementById("stats-p2-id");
const pcstatus = document.getElementById("stats-pc-id");

let status_sets = {
    health: 100,
    stamina: 100,
    mana: 100
}

let attack_sets = {
    physical_attack: {
        hit: "weapon",
        weakness: "counter",
        strong: "magic"
    },
    counter_attack: {
        hit: "counter",
        weakness: "magic",
        strong: "hit"
    },
    magic_attack: {
        hit: "magic",
        weakness: "weapon",
        strong: "counter"
    }
};


let choice1vpc = true;


function p2_choice(){
    localStorage.setItem("choice1vpc", "false");
    window.location.href = "./scenes/play_versus.html";
    

};

function pc_choice(){
    localStorage.setItem("choice1vpc", "true");
    window.location.href = "./scenes/play_versus.html";
    
}



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
    const selected_versus = localStorage.getItem("choice1vpc");
    const physical_p1 = document.getElementById("physical-p1");
    const physical_p2 = document.getElementById("physical-p2");
    const physical_pc = document.getElementById("physical-pc");
    const block_p1 = document.getElementById("block-p1");
    const block_p2 = document.getElementById("block-p2");
    const block_pc = document.getElementById("block-pc");
    const magical_p1 = document.getElementById("magical-p1");
    const magical_p2 = document.getElementById("magical-p2");
    const magical_pc = document.getElementById("magical-pc");
    const p1_overlay = document.getElementById("p1-overlay");
    const p2_overlay = document.getElementById("p2-overlay");
    const pc_overlay = document.getElementById("pc-overlay");
    const p1_stats = {...status_sets};
    const p1_attack = JSON.parse(JSON.stringify(attack_sets));
    const p1_attack_type = "";
    const p2_attack_type = "";
    const pc_attack_type = "";


    const p2_stats = {...status_sets};
    const p2_attack = JSON.parse(JSON.stringify(attack_sets));

    const pc_stats = {...status_sets};
    const pc_attack = JSON.parse(JSON.stringify(attack_sets));


    if (selected_versus === "false") {
        p2status.style.visibility = "visible";
        p2_overlay.style.display = "block";

    }
    else if(selected_versus === "true"){
        pcstatus.style.visibility = "visible";
        pc_overlay.style.display = "block";
        
    }
    
    
    physical_p1.addEventListener("click", () => {
        p1_attack_type = p1_attack.physical_attack.hit;
        if (p2status.style.visibility === "visible"){
            p2_overlay.style.display = "none";
            p1_overlay.style.display = "block";
        } else if (pcstatus.style.visibility === "visible"){
            pc_overlay.style.display = "none";
            p1_overlay.style.display = "block";
        }
    });
    physical_p2.addEventListener("click", () => {
        p2_attack_type = p2_attack.physical_attack;

    });
    physical_pc.addEventListener("click", () => {
        pc_attack_type = pc_attack.physical_attack;

    });

    block_p1.addEventListener("click", () => {
        p1_attack_type = p1_attack.counter_attack;

    });
    block_p2.addEventListener("click", () => {
        p2_attack_type = p2_attack.counter_attack;

    });
    block_pc.addEventListener("click", () => {
        pc_attack_type = pc_attack.counter_attack;

    });



    
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


function damage_calculator(pl_hit, op_hit) {
    if (pl_hit === attack_sets.physical_attack){
        if (op_hit === attack_sets.counter_attack){
            //pass self 20 damage
        } else if (op_hit === attack_sets.magic_attack){
            //pass opponent 20 damage
        } else if (op_hit === pl_hit){
            //pass both 10 damage
        }
    }
}

function winner_calculator() {
    if (p1_stats.health === 0 || p1_stats.mana === 0 || p1_stats.stamina === 0){
        print("player 1 lost");

    } else if (p2_stats.health === 0 || p2_stats.mana === 0 || p2_stats.stamina === 0 ){
        print("player 2 lost");

    } else if (pc_stats.health === 0 || pc_stats.mana === 0 || pc_stats.stamina === 0 ){
        print("PC lost");
    }
}