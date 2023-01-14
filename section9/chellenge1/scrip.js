const game = {
    team1: 'Bayern Muncih',
    team2: 'Borruussia Dortmund',
  players: [
    [
        'Neur',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'KimMich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
    ],
    [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski','Gnarby','Muller','Lewandowski'],
  date: 'Now 9th, 2023',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  }
};
const [players1, players2] = game.players;
console.log(players1,players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, players1);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago','coutinho', 'Perisic'];

const {
  odds : {team1, x:draw, team2}, 
} = game;
console.log(team1, team2, draw);

const printGolas = function (...players) {
  console.log(players);
   console.log(`${players.length} goals were score`);
};
// printGolas('Lewandowski','Gnarby','Muller','Kimmich');
// printGolas('Lewandowski','Muller');
printGolas(...game.scored);

team1 < team2 && console.log('team 1 is more likely to win');
team1 > team2 && console.log('team 2 is more likely to win');