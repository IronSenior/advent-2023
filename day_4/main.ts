import { GameDirector } from "./gameDirector";
import * as fs from "fs";
import readline from "readline"


async function partOne() {
    let partOneTotal: number = 0;
    const fileStream = fs.createReadStream('./day_4/input.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
      });

    for await(let line of rl){
        let gameDirector: GameDirector = new GameDirector(line);
        partOneTotal = partOneTotal + gameDirector.points
    }
    console.log(partOneTotal)
}


async function partTwo() {
    let results = [];
    let total = 0;
    const fileStream = fs.createReadStream('./day_4/input.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await(let line of rl){
        let gameDirector: GameDirector = new GameDirector(line);
        let wins = gameDirector.wins()

        if (results.length < gameDirector.cardId) {
            results.push([wins, 1])
        } else {
            results[gameDirector.cardId - 1][0] = wins
        }

        for (let i = gameDirector.cardId + 1; i <= gameDirector.cardId + wins; i++) {
            if (results.length < i) {
                results.push([0, results[gameDirector.cardId - 1][1]+1])
            } else {
                results[i-1][1] = results[i-1][1] + results[gameDirector.cardId - 1][1]
            }
        }
    }

    for(let card of results){
        total = total + card[1]
    }

    console.log(total)
}

partOne();
partTwo();