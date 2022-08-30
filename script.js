//Função 1:
const materiais = [
    'Hydrogênio',
    'Helio',
    'Lítio',
    'AlgumaCoisa'
]

function percorrerVetor(materiais){
    let tamanhos = [];
    for(i = 0; i<materiais.length; i++){
        tamanhos.push(materiais[i].length);
    }
    return tamanhos;
}

console.log(materiais.map(material => material.length));

//Função 2: 
function somaComum(n1, n2){
    console.log(n1 + n2);
}
somaComum(3, 4);

let soma = (n1, n2) => console.log(n1 + n2);
soma(1, 2);

//Função 3:
function comum(nome, sobrenome){
    console.log('Olá, '+ nome +''+ sobrenome);
}
comum('Lucas', ' Rosendo');

comum = (nome, sobrenome) => console.log('Olá, '+ nome +' '+sobrenome);
comum('Lucas', 'Rosendo');

//Função 4:
function init(){
    let nome = 'Monzilla';

    function displayName(){
        console.log(nome);
    }

    displayName();
}
init();

function makeFunc(){
    let nome = 'Monzilla';

    function displayName(){
        console.log(nome);
    }

    return displayName();
}
makeFunc();

//Função 5:
function greeting(name) {
    document.write('Olá, ' + name);
    document.body.appendChild(document.createElement('br'));
}
  
function processUserInput(callback) {
    var name = prompt('Por favor insira seu nome.');
    callback(name);
}
  
processUserInput(greeting);

//Função 6: Orientada a Objetos 
var pessoa = {
    nome1: ['Lucas', 'Rosendo'],
    idade: 17,
    sexo: 'masculino',
    interesses: ['música', 'programar(?)'],
    bio: function(){
        console.log(this.nome1[0] + ' ' + this.nome1[1] + ' tem ' + this.idade + 'anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1]);
    },
    saudacao: function(){
        document.write('Olá, eu sou '+ this.nome1[0] + '.');
        document.body.appendChild(document.createElement('br'));
    }
};
pessoa.nome1;
pessoa.nome1[1];
pessoa.idade;
pessoa.interesses[1];
pessoa.bio();
pessoa.saudacao();

//Função 7:
class pessoa1{
    nome;
    sexo;
    idade;
    interesses;
    bio;
    saudacao;

    constructor(nome, sexo, idade, interesses, bio, saudacao){
    this.nome       = nome       ;
    this.sexo       = sexo       ;
    this.idade      = idade      ;
    this.interesses = interesses ;
    this.bio        = bio        ;
    this.saudacao   = saudacao   ;
    }
}

pessoa1 = new pessoa1("Lucas", "masculino", 17, 'nada', (function(){
    console.log(this.nome + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses);
}), (function(){
    document.write('Olá, eu sou '+ this.nome + '.');
    document.body.appendChild(document.createElement('br'));
}))
pessoa1.nome;
pessoa1.idade;
pessoa1.bio();
pessoa1.saudacao(); 