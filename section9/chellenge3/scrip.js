const gameEvents = new Map([
    [17, '⚽ Goal'],
    [36, '🔁 Substitution'],
    [47, '⚽ Goal'],
    [64, '🟨 Yellow card'],
    [61, '🟥 red card'],
    [70, '🔁 Substitution'],
    [75, '⚽ Goal'],
    [80, '⚽ Goal'],
    [91, '🟨 Yellow card'],
]);


const events = [... new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);

console.log (`An event happend, every ${90/gameEvents.size} minutes`);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log (`An event happend, every ${time/gameEvents.size} minutes`);

for (const [min, event] of gameEvents){
    const half = min <= 45 ? 'First' : 'Second';
    console.log (`[${half} Half] ${min} : ${event}`);
}