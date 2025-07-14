//Desafio 01 Formação Lógica
//Definição das variáveis Nome e XP
let name = "Neo";
let levelXP = 9100;

//Criando a estrutura de decisão para medir o nível do herói 
if (levelXP <= 1000) {
  console.log("O herói de nome " + name + "está no nível de Ferro!");
} else if (levelXP <= 2000) {
  console.log("O herói de nome " + name + "está no nível de Bronze!");
} else if (levelXP <= 5000) { 
  console.log("O herói de nome " + name + " está no nível de Prata!");
} else if (levelXP <= 7000) {
  console.log("O herói de nome " + name + " está no nível de Ouro!");
} else if (levelXP <= 8000){ 
  console.log("O herói de nome " + name + " está no nível de Platina!");
} else if (levelXP <= 9000){ 
  console.log("O herói de nome " + name + " está no nível de Ascendente!");
} else if (levelXP <= 10000){ 
  console.log("O herói de nome " + name + " está no nível de Imortal!");
} else if (levelXP > 10000){
  console.log("O herói de nome " + name + " está no nível de Radiante!")
}  else {
  console.log("XP inválida. Tente novamente.");
}