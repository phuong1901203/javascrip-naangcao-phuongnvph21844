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
  },
};


for (const [i, player] of game.scored.entries())
console.log (`Goal ${i + 1}: ${player}`);

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds)
 average += odd;
 average /= odds.length;
 console.log(average);

 for (const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log (`Odd of ${odd}`);
 }