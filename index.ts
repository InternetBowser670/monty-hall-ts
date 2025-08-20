let totalRuns = 1000000000;
let switchWins = 0;

const startTime = performance.now();

for (let i = 0; i < totalRuns; i++) {
    let doorPosition = Math.floor(Math.random() * 3);
    let doors = [{ correct: 0, chosen: 0 }, { correct: 0, chosen: 0 }, { correct: 0, chosen: 0 }]
    //@ts-ignore
    doors[doorPosition].correct = 1;
    const originalChosen = Math.floor(Math.random() * 3)
    //@ts-ignore
    doors[originalChosen].chosen = 1
    const doorToRemove = Math.floor(Math.random() * 2)

    if (doorToRemove == 0) {
        //@ts-ignore
        if (doors[0].chosen == 1) {
            doors.splice(1, 1)
        } else {
            doors.splice(0, 1)
        }
    } else {
        //@ts-ignore
        if (doors[1].chosen == 1) {
            doors.splice(2, 1)
        } else {
            doors.splice(1, 1)
        }
    }

    let newChosen = 0
    //@ts-ignore
    if (doors[0].chosen == 1) {
        newChosen = 0
    } else {
        newChosen = 1
    }

    //@ts-ignore
    if (doors[newChosen].correct == 1) {
        console.log(`Stay wins in run ${i + 1}`)
    } else {
        console.log(`Switch wins in run ${i + 1}`)
        switchWins++;
    }
}

const endTime = performance.now();

console.log(`Total time taken for ${totalRuns} runs: ${(endTime - startTime).toFixed(2)} ms`);
console.log(`Switch wins: ${switchWins} out of ${totalRuns} runs, which is ${((switchWins / totalRuns) * 100).toFixed(2)}%`);