'use strict';
//Tipo del ataque que desea realizar
// donde :
//"Insecto"=0
//Siniestro"=1
//"Dragon" =2
//"Electrico"=3
//"Hada" =4
//"Lucha" =5
//"Fuego" =6
//"Volador"=7
//"Fantasma"=8
//"Planta" =9
//"Tierra" =10
//"Hielo" =11
//"Normal"=12
//"Veneno" =13
//"Psico" =14
//"Roca" =15
//"Acero" =16
//"Agua"=17
//""=18   (es cuando no posee tipo adiconal)

// traducir el tipo a espanol
const typeattack = ["Insecto", "Siniestro", "Dragon", "Electrico", "Hada", "Lucha", "Fuego", "Volador", "Fantasma", "Planta", "Tierra", "Hielo", "Normal", "Veneno", "Psico", "Roca", "Acero", "Agua", ""]

// Constantes defensa por tipo 
const def0 = bugdef = [1, 1, 1, 1, 1, 0.5, 2, 2, 1, 0.5, 0.5, 1, 1, 1, 1, 2, 1, 1]
const def1 = darkdef = [2, 0.5, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 1, 0, 1, 1, 1]
const def2 = dragondef = [1, 1, 2, 0.5, 2, 1, 0.5, 1, 1, 0.5, 1, 2, 1, 1, 1, 1, 1, 0.5]
const def3 = electricdef = [1, 1, 1, 0.5, 1, 1, 1, 0.5, 1, 1, 2, 1, 1, 1, 1, 1, 0.5, 1]
const def4 = fairydef = [0.5, 0.5, 0, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1]
const def5 = fightingdef = [0.5, 0.5, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 0.5, 1, 1]
const def6 = firedef = [0.5, 1, 1, 1, 0.5, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1, 1, 2, 0.5, 2]
const def7 = flyingdef = [0.5, 1, 1, 2, 1, 0.5, 1, 1, 1, 0.5, 0, 2, 1, 1, 1, 2, 1, 1]
const def8 = ghostdef = [0.5, 2, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 0, 1, 1, 1, 1, 1]
const def9 = grassdef = [2, 1, 1, 0.5, 1, 1, 2, 2, 1, 0.5, 0.5, 2, 1, 2, 1, 1, 1, 0.5]
const def10 = grounddef = [1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 0.5, 1, 0.5, 1, 2]
const def11 = icedef = [1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 0.5, 1, 1, 1, 1, 2, 2, 1]
const def12 = normaldef = [1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
const def13 = poisondef = [0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 2, 1, 1, 0.5, 2, 1, 1, 1]
const def14 = psychicdef = [2, 2, 1, 1, 1, 0.5, 1, 1, 2, 1, 1, 1, 1, 1, 0.5, 1, 1, 1]
const def15 = rockdef = [1, 1, 1, 1, 1, 2, 0.5, 0.5, 1, 2, 2, 1, 0.5, 0.5, 1, 1, 2, 2]
const def16 = steeldef = [0.5, 1, 0.5, 1, 0.5, 2, 2, 0.5, 1, 0.5, 2, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1]
const def17 = waterdef = [1, 1, 1, 2, 1, 1, 0.5, 1, 1, 2, 1, 0.5, 1, 0, 1, 1, 0.5, 0.5]
const def18 = none = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]


// llamar datos tipos
//Tipo pokemon atacado  
//Tipo del ataque usado

function calcular() {


    const attack = document.getElementById("ataque").value;

    const poketype1 = document.getElementById("primertipo1").value;

    const poketype2 = document.getElementById("segundotipo2").value;
   /*  if (poketype2 > 18 & poketype2 < 0) {
        const poketype2 = 18
    } */
    const poketype3 = document.getElementById("teracristalizacion").value;
   /*  if (poketype3 > 18 & poketype3 < 0) {
        const poketype3 = 18
    } */


    //Resistencias pokemon atacado

    const defence1 = [def0[attack], def1[attack], def2[attack], def3[attack], def4[attack], def5[attack], def6[attack], def7[attack], def8[attack], def9[attack], def10[attack], def11[attack], def12[attack], def13[attack], def14[attack], def15[attack], def16[attack], def17[attack], def18[attack]]
    const defence2 = [def0[attack], def1[attack], def2[attack], def3[attack], def4[attack], def5[attack], def6[attack], def7[attack], def8[attack], def9[attack], def10[attack], def11[attack], def12[attack], def13[attack], def14[attack], def15[attack], def16[attack], def17[attack], def18[attack]]
    const defence3 = [def0[attack], def1[attack], def2[attack], def3[attack], def4[attack], def5[attack], def6[attack], def7[attack], def8[attack], def9[attack], def10[attack], def11[attack], def12[attack], def13[attack], def14[attack], def15[attack], def16[attack], def17[attack], def18[attack]]

    // leer resultado 
    document.getElementById("resultado1").innerHTML = "Un ataque tipo " + typeattack[attack] + " golpea en propocion " + "x" + (defence1[poketype1] * defence2[poketype2] * defence3[poketype3]) + " a un pokemon de tipo " + typeattack[poketype1] + " " + typeattack[poketype2] + " " + typeattack[poketype3];

    // efectividades

    document.getElementById("resultado2").innerHTML = "Tu ataque de tipo " + typeattack[attack] + " afecta de la siquiente forma a los demas tipos :" + "<br>"
        + "<br>" + typeattack[0] + " = " + bugdef[attack]
        + "<br>" + typeattack[1] + " = " + darkdef[attack]
        + "<br>" + typeattack[2] + " = " + dragondef[attack]
        + "<br>" + typeattack[3] + " = " + electricdef[attack]
        + "<br>" + typeattack[4] + " = " + fairydef[attack]
        + "<br>" + typeattack[5] + " = " + fightingdef[attack]
        + "<br>" + typeattack[6] + " = " + firedef[attack]
        + "<br>" + typeattack[7] + " = " + flyingdef[attack]
        + "<br>" + typeattack[8] + " = " + ghostdef[attack]
        + "<br>" + typeattack[9] + " = " + grassdef[attack]
        + "<br>" + typeattack[10] + " = " + grounddef[attack]
        + "<br>" + typeattack[11] + " = " + icedef[attack]
        + "<br>" + typeattack[12] + " = " + normaldef[attack]
        + "<br>" + typeattack[13] + " = " + poisondef[attack]
        + "<br>" + typeattack[14] + " = " + psychicdef[attack]
        + "<br>" + typeattack[15] + " = " + rockdef[attack]
        + "<br>" + typeattack[16] + " = " + steeldef[attack]
        + "<br>" + typeattack[17] + " = " + waterdef[attack]

}

    // Colocar tipos eficiencias
    // terminar tabla 
