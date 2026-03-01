let personagens = {
    nome: ['Lucas', 'Kili', 'Matheus', 'Turin', 'Bil'],
    altura: ['1.50', '1.40', '1.80', '0.70'],
    raca: ['Elfo', 'orc', 'Fada', ' Humano', 'Demonio', 'Hobbit'],
    poder: ['Magia', 'Espada', 'Arco', 'Sombras'],
    estoque: 10,
    preco: 50 
};

console.log('Monte seu Personagem', personagens);

console.log('Escolha seu Nome :', personagens.nome[3])
console.log('Escolha sua Altura :', personagens.altura[3])
console.log('Escolha sua Raça :', personagens.raca[5])
console.log('Escolha seu Poder :', personagens.poder[0])
console.log('Estoque de personagens :', personagens.estoque);
console.log('Preço dos personagem :', personagens.preco);


// Como acessar o nome do objeto ?
console.log('Como acessar o nome do objeto ?');
console.log(personagens.nome)

// Como acessar o preço usando o colchetes ?
console.log('Como acessar o preço usando o colchetes ?');
console.log(personagens['preco']);

// Atualize o estoque para 80 ?
console.log('Atualize o estoque para 80 ?');
personagens.estoque = 80;

// Imprima todas as propriedades no console.
console.log('Imprima todas as propriedades no console.');
console.log(personagens);
