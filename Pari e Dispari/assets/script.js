var scelta_Utente = prompt('Cosa preferisci Pari o Dispari')
console.log('Hai scelto: '+ scelta_Utente)

var n_Utente = parseInt(prompt('Inserisci un numero dal 1 al 5:'))
console.log('Questo è il tuo numero:'+ n_Utente)

var pc_rdm = pc();

function pc(){
  return  Math.ceil(Math.random() * 5);
}

function risultato(a,b){
  return a + b;
}

console.log('La somma di entrambi numeri è: '+ risultato(n_Utente, pc_rdm))



function game(){
  if(!risultato % 2){
    return 'pari';
  }else{
    return 'dispari';
  }
}

if(!scelta_Utente == game()){
  console.log('Hai vinto')
}else{
  console.log('Hai perso')
}