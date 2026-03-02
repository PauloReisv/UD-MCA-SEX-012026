let frutas = ['Maçã','Banana','Laranja','Uva','Manga','Abacaxi','Melancia',
    'Morango','Pera','Kiwi','Mamão','Limão','Cereja','Ameixa','Goiaba','Caju',
    'Maracujá','Tangerina','Carambola','Pitaya','Graviola'];

console.log("Qual elemento está na posição 0, 7, 11, 15, 18 e 20?");

console.log(frutas[0]);
console.log(frutas[7]);
console.log(frutas[11]);
console.log(frutas[15]);
console.log(frutas[18]);
console.log(frutas[20]);

console.log("Qual elemento está na penúltima e última posição?")

console.log(frutas[19]);
console.log(frutas[20]);

console.log("Quantos elementos existem no array?")

console.log(frutas.length);

console.log("Adicione um novo elemento ao final do array")

frutas.push('Abacate');

console.log("Imprima todos os elementos usando um for")

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}