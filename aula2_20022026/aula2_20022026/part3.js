let persogensprontos = [

    {nome: 'Kili', poder: 'Magia', altura: 1.40, raca: 'Orc',
     preco: 30, estoque: 50},

    {nome: 'Matheus', poder: 'Espada', altura: 1.80, raca: 'Humano',
     preco: 100, estoque: 3},

    {nome: 'Lucas', poder: 'Arco', altura: 1.20, raca: 'Huamano',
     preco: 50, estoque: 10},

    {nome: 'Turin', poder: 'Sombras', altura: 0.60, raca: 'Hobbit',
     preco: 20, estoque: 70},

    {nome: 'Bil', poder: 'Arco', altura: 1.70, raca: 'Elfo',
     preco: 60, estoque: 40},

    {nome: 'Pippin', poder: 'Magia', altura: 1.40, raca: 'Orc',
     preco: 30, estoque: 50},

    {nome: 'Merry', poder: 'Espada', altura: 1.80, raca: 'Humano',
     preco: 100, estoque: 3},

    {nome: 'Legolas', poder: 'Arco', altura: 1.20, raca: 'Huamano',
     preco: 50, estoque: 10},

    {nome: 'Gollum', poder: 'Sombras', altura: 0.60, raca: 'Hobbit',
     preco: 20, estoque: 70},

    {nome: 'Balrog', poder: 'Arco', altura: 1.70, raca: 'Elfo',
     preco: 60, estoque: 40},
];


// Qual é o preço do segundo objeto ?
console.log('Qual é o preço do segundo objeto ?');
console.log(persogensprontos[1].preco);


// Qual é o nome do terceiro objeto ?
console.log('Qual é o nome do terceiro objeto ?');
console.log(persogensprontos[2].nome);


// Quantos itens existem no array ?
console.log('Quantos itens existem no array ?');
console.log(persogensprontos.length);


// Imprima o nome de todos os objetos.
console.log('Imprima o nome de todos os objetos.');
persogensprontos.forEach(p => {
    console.log(p.nome);
});


// Some o total de estoque de todos os objetos.
console.log('Some o total de estoque de todos os objetos.');

let totalestoque = 0;
for ( let i = 0; i < persogensprontos.length; i++) {
    totalestoque += persogensprontos[i].estoque
}
console.log(totalestoque);


// Qual objeto possui maior estoque ?
console.log('Qual objeto possui maior estoque ?');

let maiorEstoque = persogensprontos[0];
for (let i = 1; i < persogensprontos.length; i++) {
    if (Number(persogensprontos[i].estoque) > Number(maiorEstoque.estoque)) {
        maiorEstoque = persogensprontos[i];
    }
}

console.log('Personagem com maior estoque é', maiorEstoque.nome, 'com', maiorEstoque.estoque );