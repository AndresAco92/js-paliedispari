//chiedo all'utente la parola
var word = prompt('Inserisci una parole e verifichiamo se è palindroma!');
 console.log('Questa è la tua parola: '+ word)

//evocazione funzione
labirinto(word);

//verifico il valore della parola da destra a sinitra e metto a confronto tramite funzione
function labirinto(palabra){
   if(palabra.split('').reverse().join('') === palabra){
      console.log('La parola inserita é palindroma')
   }else {
      console.log('La parola inserita non è palindromo')
   }
}


//.split permette alla parola o frase di diventare un array diviso in sottostringhe

//.reverse permette di leggere e invertire tutto l'array preso da .split

//.join permette di reconvertire tutto l'array in una stringa per poi confrontare con la  parola iniziale.
