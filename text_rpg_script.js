

const solo_btn = document.getElementById("play-game-btn");
const versus_btn = document.getElementById("local-versus-btn");
const exit_btn = document.getElementById("exit-btn");
const main_menu_btn = document.getElementById("story-main-menu-btn");
const return_close_btn = document.getElementById("return-close");
const choice_p2 = document.getElementById("choice-p2");
const choice_pc = document.getElementById("choice-pc");
const p2name = document.getElementById("p2-name");
const pcname = document.getElementById("pc-name");





let status_sets = {
    health: 100,
    stamina: 100,
    mana: 100
}

let attack_sets = {
    physical_attack: "weapon",
    counter_attack: "counter",
    magic_attack: "magic"
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



const p1_stats = {...status_sets};
const opp_stats = {...status_sets};

let p1_attack_type = "";
let p2_attack_type = "";
let pc_attack_type = "";



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
    const opp_overlay = document.getElementById("p2-overlay");
    const p1_attack = JSON.parse(JSON.stringify(attack_sets));
    


    const p2_attack = JSON.parse(JSON.stringify(attack_sets));

    
    const pc_attack = JSON.parse(JSON.stringify(attack_sets));


    const fight_again_btn = document.getElementById("choice-fight");
    const return_mainmenu_btn = document.getElementById("choice-return");


    document.getElementById("p1-win-txt").style.visibility = "hidden";
    document.getElementById("win-txt").style.visibility = "hidden";
    document.getElementById("p2-win-txt").style.visibility = "hidden";
    document.getElementById("lost-txt").style.visibility = "hidden";
    document.getElementById("tie-txt").style.visibility = "hidden";

    if (selected_versus === "false") {
        p2name.style.visibility = "visible";


    }
    else if(selected_versus === "true"){
        pcname.style.visibility = "visible";
        
    }
    

    
    
    

    
    physical_p1.addEventListener("click", () => {
        p1_attack_type = p1_attack.physical_attack;
        opp_overlay.style.display = "none";
        p1_overlay.style.display = "block";
        console.log(p1_attack_type);
    });
    physical_p2.addEventListener("click", () => {
        p2_attack_type = p2_attack.physical_attack;
        p1_overlay.style.display = "none";
        opp_overlay.style.display = "block";
        damage_calculator(p1_attack_type, p2_attack_type);
        winner_calculator();
    });
    physical_pc.addEventListener("click", () => {
        pc_attack_type = pc_attack.physical_attack;
        p1_overlay.style.display = "none";
        opp_overlay.style.display = "block";
        damage_calculator(p1_attack_type, pc_attack_type);
        winner_calculator();
    });

    block_p1.addEventListener("click", () => {
        p1_attack_type = p1_attack.counter_attack;
        opp_overlay.style.display = "none";
        p1_overlay.style.display = "block";
        
        
    });
    block_p2.addEventListener("click", () => {
        p2_attack_type = p2_attack.counter_attack;
        p1_overlay.style.display = "none";
        opp_overlay.style.display = "block";
        damage_calculator(p1_attack_type, p2_attack_type);
        winner_calculator();
    });
    block_pc.addEventListener("click", () => {
        pc_attack_type = pc_attack.counter_attack;
        p1_overlay.style.display = "none";
        opp_overlay.style.display = "block";
        damage_calculator(p1_attack_type, pc_attack_type);
        winner_calculator();
    });

    magical_p1.addEventListener("click", () => {
        p1_attack_type = p1_attack.magic_attack;
        opp_overlay.style.display = "none";
        p1_overlay.style.display = "block";
    });
    magical_p2.addEventListener("click", () => {
        p2_attack_type = p2_attack.magic_attack;
        p1_overlay.style.display = "none";
        opp_overlay.style.display = "block";
        damage_calculator(p1_attack_type, p2_attack_type);
        winner_calculator();
    });
    magical_pc.addEventListener("click", () => {
        pc_attack_type = pc_attack.magic_attack;
        p1_overlay.style.display = "none";
        opp_overlay.style.display = "block";
        damage_calculator(p1_attack_type, pc_attack_type);
        winner_calculator();
    });
    
    
    
    
    

    
    main_menu_btn.addEventListener("click", () => {
        window.close();
        window.location.href = "../text_rpg.html";
    });


    fight_again_btn.addEventListener("click", ()=> {
        p1_stats.health = 100;
        p1_stats.stamina = 100;
        p1_stats.mana = 100;
        opp_stats.health = 100;
        opp_stats.stamina = 100;
        opp_stats.mana = 100;
        document.getElementById("overlay-win").style.display = "none";
        document.getElementById("versus-win-window").style.display = "none";
        document.getElementById("p1-win-txt").style.visibility = "hidden";
        document.getElementById("win-txt").style.visibility = "hidden";
        document.getElementById("p2-win-txt").style.visibility = "hidden";
        document.getElementById("lost-txt").style.visibility = "hidden";
        document.getElementById("tie-txt").style.visibility = "hidden";
        window.close();
    });
    return_mainmenu_btn.addEventListener("click", () => {
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
            p1_stats.health -= 20;
        } else if (op_hit === attack_sets.magic_attack){
            opp_stats.health -=20;
        } else if (op_hit === pl_hit){
            p1_stats.health -= 10;
            opp_stats.health -=10;
        }
    }

    if (pl_hit === attack_sets.counter_attack){
        if (op_hit === attack_sets.magic_attack){
            p1_stats.stamina -= 20;
        } else if (op_hit === attack_sets.physical_attack){
            opp_stats.stamina -=20;
        } else if (op_hit === pl_hit){
            p1_stats.stamina -= 10;
            opp_stats.stamina -=10;
        }
    }


    if (pl_hit === attack_sets.magic_attack){
        if (op_hit === attack_sets.physical_attack){
            p1_stats.mana -= 20;
        } else if (op_hit === attack_sets.counter_attack){
            opp_stats.mana -=20;
        } else if (op_hit === pl_hit){
            p1_stats.mana -= 10;
            opp_stats.mana -=10;
        }
    }
    console.log(p1_stats.health + " " + opp_stats.health);
    console.log(p1_stats.stamina + " " + opp_stats.stamina);
    console.log(p1_stats.mana + " " + opp_stats.mana);
    
}


function winner_calculator() {
    if (p1_stats.health <= 0 && opp_stats.health <= 0 || p1_stats.stamina <= 0 && opp_stats.stamina <= 0 || p1_stats.mana <= 0 && opp_stats.mana <= 0){
        document.getElementById("overlay-win").style.display = "block";
        document.getElementById("versus-win-window").style.display = "block";
        document.getElementById("tie-txt").style.visibility = "visible";
    } else if (opp_stats.health <= 0 || opp_stats.mana <= 0 || opp_stats.stamina <= 0){
        document.getElementById("overlay-win").style.display = "block";
        document.getElementById("versus-win-window").style.display = "block";
        if (p2name.style.visibility === "visible"){
            document.getElementById("p1-win-txt").style.visibility = "visible";
        } else if (pcname.style.visibility === "visible") {
            document.getElementById("win-txt").style.visibility = "visible";
        }  
    } else if (p1_stats.health <= 0 || p1_stats.mana <= 0 || p1_stats.stamina <= 0){
        document.getElementById("overlay-win").style.display = "block";
        document.getElementById("versus-win-window").style.display = "block";
        if (p2name.style.visibility === "visible"){
            document.getElementById("p2-win-txt").style.visibility = "visible";
        } else if (pcname.style.visibility === "visible") {
            document.getElementById("lost-txt").style.visibility = "visible";
        }  
    } 
}