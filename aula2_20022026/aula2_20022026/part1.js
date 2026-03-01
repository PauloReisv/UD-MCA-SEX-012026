let estilomusicais = [ 'Rock n Roll', 'Pop', 'Jazz', 'Samba', 'Bossa Nova', 'Hip Hop', 'Rap',
     'Eletronica', 'Reggae', 'Country', 'Classica', 'Mpb', 'Forro', 'Indie', 'Punk', 'K-pop',
    'Pop Rock', 'Opera', 'Barroco', 'Flamenco', 'Tango' ]

console.log(estilomusicais);


// Qual elemento está na posição 0, 7, 11, 15, 18 e 20 ?
console.log('Qual elemento está na posição 0, 7, 11, 15, 18 e 20 ?');

console.log(estilomusicais[0]);
console.log(estilomusicais[7]);
console.log(estilomusicais[11]);
console.log(estilomusicais[15]);
console.log(estilomusicais[18]);
console.log(estilomusicais[20]);


// Qual elemento está na penútima e última posição ?
console.log('Qual elemento está na penútima e última posição ?');
console.log(estilomusicais[19]);
console.log(estilomusicais[20]);


// Quantos elementos existem no array ?
console.log('Quantos elementos existem no array ?');
console.log('Estilos Musicais',estilomusicais.length);


// Adicione um novo elemento ao final do array.
console.log('Adicione um novo elemento ao final do array.');
estilomusicais.push('Heavy Metal');

// Imprima todos os elementos usando um for.
console.log('Imprima todos os elementos usando um for.');
for (let i = 0; i < estilomusicais.length; i++) {
    console.log(i + ':' + estilomusicais[i]);
}
