/* 
SNACK 1
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto.
*/

const guests = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello' ];

const stampGuests = guests.map((e, i) => {
    return {
        tableName : 'Tavolo Vip',
        guestName : e,
        place : i + 1
    }
})

console.log(stampGuests);

/* 
SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
*/

const students = [
    {
        id : '213',
        name : 'Marco della Rovere',
        grades: '78'
    },
    {
        id : '110',
        name : 'Paola Cortellessa',
        grades: '96'
    },
    {
        id : '250',
        name : 'Andrea Mantegna',
        grades: '48'
    },
    {
        id : '145',
        name : 'Gaia Borromini',
        grades: '74'
    },
    {
        id : '196',
        name : 'Luigi Grimaldello',
        grades: '68'
    },
    {
        id : '102',
        name : 'Piero della Francesca',
        grades: '50'
    },
    {
        id : '120',
        name : 'Francesca da Polenta',
        grades: '84'
    }
]

const upperCaseName = students.map((e) => {
    return e.name.toUpperCase()
})

console.log(upperCaseName);

const bestStudents = students.filter((e) => {
    return e.grades > 70
}).map((e) => {
    return e.name
})

console.log(bestStudents);

const bestOfTheBestStudents = students.filter((e) => {
    return e.grades > 70 && e.id > 120
}).map((e) => {
    return e.name
})

console.log(bestOfTheBestStudents);

