/* SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal */

function snackThree() {
  const racingBikes = [
    {
      mname: "Specialized Tarmac SL7",
      weight: 7.2,
    },
    {
      name: "Trek Madone SLR 9",
      weight: 7.4,
    },
    {
      name: "Cannondale SuperSix EVO",
      weight: 7.1,
    },
    {
      name: "Giant TCR Advanced SL",
      weight: 7.3,
    },
    {
      name: "Pinarello Dogma F12",
      weight: 6.8,
    },
    {
      name: "BMC Teammachine SLR01",
      weight: 7.0,
    },
    {
      name: "Scott Addict RC Ultimate",
      weight: 6.9,
    },
    {
      name: "Cervélo R5",
      weight: 7.2,
    },
    {
      name: "Colnago C64",
      weight: 7.5,
    },
    {
      name: "Merida Reacto",
      weight: 7.6,
    },
  ];

  const result = racingBikes.reduce((acc, bike) => {
    return bike.weight < acc.weight ? bike : acc;
  }, racingBikes[0]); //reduce for min value

  const { name, weight } = result; //deconstruction

  const section = document.querySelector("main section");
  section.innerHTML = `La bici che pesa meno si chiama "${name}" e pesa per la precisione ${weight} KG`; //template literal
  return result;
}

console.log(snackThree());

/* 
SNACK 4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const teams = [
  {
    name: "Manchester United",
    points: 0,
    fouls: 0,
  },
  {
    name: "Liverpool",
    points: 0,
    fouls: 0,
  },
  {
    name: "Real Madrid",
    points: 0,
    fouls: 0,
  },
  {
    name: "FC Barcelona",
    points: 0,
    fouls: 0,
  },
  {
    name: "Bayern Munich",
    points: 0,
    fouls: 0,
  },
  {
    name: "Juventus",
    points: 0,
    fouls: 0,
  },
  {
    name: "Paris Saint-Germain",
    points: 0,
    fouls: 0,
  },
  {
    name: "Inter",
    points: 0,
    fouls: 0,
  },
  {
    name: "Manchester City",
    points: 0,
    fouls: 0,
  },
  {
    name: "AC Milan",
    points: 0,
    fouls: 0,
  },
];
