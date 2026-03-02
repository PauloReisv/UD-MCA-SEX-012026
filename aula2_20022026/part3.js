let produtos = [
    { nome: 'Notebook', preco: 3500, estoque: 10 },
    { nome: 'Mouse', preco: 80, estoque: 50 },
    { nome: 'Teclado', preco: 150, estoque: 30 },
    { nome: 'Monitor', preco: 1200, estoque: 15 },
    { nome: 'Impressora', preco: 900, estoque: 8 },
    { nome: 'Cadeira Gamer', preco: 1800, estoque: 5 },
    { nome: 'Headset', preco: 250, estoque: 40 },
    { nome: 'Webcam', preco: 300, estoque: 25 },
    { nome: 'HD Externo', preco: 500, estoque: 20 },
    { nome: 'Pen Drive', preco: 60, estoque: 100 }
];

console.log("Qual é o preço do segundo objeto?");

console.log(produtos[1].preco);

console.log("Qual é o nome do terceiro objeto?");

console.log(produtos[2].nome);

console.log("Quantos itens existem no array?");

console.log(produtos.length);

console.log("Imprima o nome de todos os objetos.");

produtos.forEach(produto => {
    console.log(produto.nome);
});

console.log("Some o total de estoque de todos os objetos.");

let totalEstoque = produtos.reduce((total, produto) => total + produto.estoque, 0);
console.log(totalEstoque);