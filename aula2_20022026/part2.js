let produto = {
    nome: 'Notebook',
    cor: 'Preto',
    preco: 3500,
    estoque: 50
};

console.log("Como acessar o nome do objeto?");

console.log(produto.nome);

console.log("Como acessar o preço usando colchetes?");

console.log(produto['preco']);

console.log("Atualize o estoque para 80.");

produto.estoque = 80;

console.log("Imprima todas as propriedades no console.");

console.log(produto);