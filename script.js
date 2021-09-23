//Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:

let dados=[
    {"altura":1.65,
    "sexo":'F'},
    {"altura":1.80,
    "sexo":'M'},
    {"altura":1.80,
    "sexo":'F'},
    {"altura":1.50,
    "sexo":'M'},
    {"altura":1.70,
    "sexo":'F'},
    {"altura":1.55,
    "sexo":'M'},
    {"altura":1.50,
    "sexo":'F'},
    {"altura":1.52,
    "sexo":'M'},
    {"altura":1.41,
    "sexo":'F'},
    {"altura":1.35,
    "sexo":'M'},
    {"altura":1.45,
    "sexo":'F'},
    {"altura":1.50,
    "sexo":'M'}, 
    {"altura":1.35,
    "sexo":'M'},
    {"altura":1.63,
    "sexo":'F'},
    {"altura":1.22,
    "sexo":'M'}  
]

/*Com reduce */
console.log(dados[0].altura);

const min=dados.reduce((a,b)=>{
    if(b.altura<a.altura)a=b;
    return a;
})

console.log(min);


const max=dados.reduce((a,b)=>{
    if(b.altura>a.altura)a=b;
    return a;
})

console.log(max);

//Com foreach

let somaAlturaF = 0;
let qtdeMulheres = 0;
let qtdeHomens = 0;

//media das mulheres
dados.forEach(function (dados) {
    if (dados.sexo === "F") {
        qtdeMulheres += 1;
        somaAlturaF += dados.altura;
    } else {
        qtdeHomens += 1;
    }
})

let mediaAltMulheres = (somaAlturaF / qtdeMulheres).toFixed(2);

console.log(`menor Altura: ${dados[14].altura}`);
console.log(`Maior altura: ${dados[0].altura}`);
console.log(`Média da altura das Mulheres: ${mediaAltMulheres}`);
console.log(`Quantidade de Homens: ${qtdeHomens}`);
