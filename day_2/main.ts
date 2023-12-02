import { Game } from "./game";
import * as fs from "fs";
import readline from "readline"


async function main() {
    let totalID: number = 0;
    let powerOfMinimum: number = 0;
    const gameDirector: Game = new Game(12, 14, 13);
    const fileStream = fs.createReadStream('./day_2/input.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
      });

    for await(let line of rl){
        if(gameDirector.isPosible(line)){
            totalID = totalID + gameDirector.getGameId(line)
        }
        
        powerOfMinimum = powerOfMinimum + gameDirector.getPowerOfMinimuns(line)
    }

    console.log(totalID)
    console.log(powerOfMinimum)
}


main();