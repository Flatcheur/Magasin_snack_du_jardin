var ListNumber = []; 
var ListChance = []; 

function ClickButtonNumber(Number){
    var chemin = document.getElementsByClassName("grille_de_numero")[0]; 
    var nb = Number.toString(); 
    if(ListNumber.includes(nb)){       
        chemin.getElementsByClassName(nb)[0].style.background = "white" ; 
        ListNumber = ListNumber.filter((num)=> num !== nb); 
    } else if(ListNumber.length < 5) { 
        chemin.getElementsByClassName(nb)[0].style.background = "red" ; 
        ListNumber.push(nb); 
    } 
}   

function ClickButtonNumberChance(Number){
    var chemin = document.getElementsByClassName("grille_de_numero_de_chance")[0]; 
    var nb = Number.toString(); 
    if(ListChance.includes(nb)){       
        chemin.getElementsByClassName(nb)[0].style.background = "white" ; 
        ListChance = ListChance.filter((num)=> num !== nb); 
    } else if(ListChance.length < 1) { 
        chemin.getElementsByClassName(nb)[0].style.background = "red" ; 
        ListChance.push(nb); 
    }
}   

var joker_1 = ""; 
var joker_2 = ""; 

function ClickButtonJoker_1(Case){ 
    var chemin_case = document.getElementsByClassName(Case)[0]; 
    var chemin_joker = document.getElementsByClassName(joker_1)[0]

    if(joker_1 === Case){
        chemin_case.style.background = "white"; 
        joker_1 = ""; 
    } else if (joker_1 !== "") { 
        chemin_case.style.background = "red"; 
        chemin_joker.style.background = "white"; 
        joker_1 = Case; 
    } else { 
        chemin_case.style.background = "red"; 
        joker_1 = Case; 
    }
}

function ClickButtonJoker_2(Case){ 
    var chemin_case = document.getElementsByClassName(Case)[0]; 
    var chemin_joker = document.getElementsByClassName(joker_2)[0]

    if(joker_2 === Case){
        chemin_case.style.background = "white"; 
        joker_2 = ""; 
    } else if (joker_2 !== "") { 
        chemin_case.style.background = "red"; 
        chemin_joker.style.background = "white"; 
        joker_2 = Case; 
    } else { 
        chemin_case.style.background = "red"; 
        joker_2 = Case; 
    }
}


function ClickButtonRenitialiser(){ 
    for (let i = 0; i < ListNumber.length ; i++){ 
        document.getElementsByClassName(ListNumber[i]).style.background = "white"; 
    } 
    ListNumber = [] 
}