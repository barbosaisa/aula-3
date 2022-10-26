//estrutura condicionais
// estruturas de desição

//usando o if 
var jogador1=0;
var jogador2= 3;
var placar; 


//usando o if 

if (jogador1 > 0) {
console.log('jogador1 marcou ponto');

} else if (jogador2 > 0) {
console.log('jogador2 marcou ponto');

} else {
console.log('ninguém marcou ponto');
}
 //aninhando if's
 // if ternário 
 jogador1 != -1 &&  jogador2 != -1 ?
 console.log('os jogadores são válidos'):
 console.log('os jogadores não são válidos');

 if(jogador1 > 0 && jogador2==0){
    console.log (' o jogador 1 marcou ponto ');
    placar=jogador1>jogador2;
 }
 //usando o else if 
 else if (jogador2 > 0 && jogador1 ==0 ){
    console.log (' o jogador 2 marcou um ponto');
    placar= jogador2 > jogador1;
 }
 //usando o else 
 else{
 console.log('ninguem marcou ponto ');
 }
var vasco = 0;
var palmeiras= 3; 
var placar;

//usando o switch 
switch (placar) {
    case placar= vasco > palmeiras :
        console.log ('vasco ganhou')
        break;
case placar = palmeiras > vasco :
    console.log ('palmeiras ganhou')
    break;
    default:
        console.log('ninguem ganha , que pena...')
        break;

}
//estrutura de repetição 
let array = ['valor1', 'valor2', 'valor3', 'valor4']
let array = [propriedade1:'valor1',propriedade2: 'valor2', propriedade3:'valor3',propriedade4: 'valor4']
//executa até que seja falso
for (let i = 0; i < array.length; i++) {
    console.log(i)
}

//for/in - executa repetição a partir de uma propriedade com array 
for(i in array){
    console.log(i);

}
//com object 
for (i in Lucas){
    console.log(i)
}
// while - executa enquanto for verdadeira 
var a = 0;
while(a<10) {
    a==;
    console.log(a);
}
// do - executa até que seja falsa
console.log ('===============================================================')
var b =0;
do{
    b++
    console.log(b);
} while (b<10);
    
}
]