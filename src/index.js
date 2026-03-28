// 1- Desafio Classificador de nível de Herói

console.log("\n** Classificador de nível de Herói **\n");
console.log("---------------- 🔻 x 🔻 x 🔻 ----------------\n");

const nome = "Eddie"
const xp = 7000;
const niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];
let nivel

if(xp <= 1000){
    nivel = niveis[0]
}

else if(xp <= 2000){
    nivel = niveis[1]
}

else if(xp <= 5000){
    nivel = niveis[2]
}

else if(xp <= 7000){
    nivel = niveis[3]
}

else if(xp <= 8000){
    nivel = niveis[4]
}

else if(xp <= 9000){
    nivel = niveis[5]
}

else if(xp <= 10000){
    nivel = niveis[6]
}

else{
    nivel = niveis[7]
}


console.log("O Herói de nome ** " + nome + " ** está com a XP de nível ** " + nivel + " **.\n\n");
console.log("---------------- 🔺 x 🔺 x 🔺 ----------------\n");