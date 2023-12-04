import { MapReader } from "./mapReader";
import * as fs from "fs";
import readline from "readline"


async function main() {
    var fs = require('fs');
    var map = fs.readFileSync('./day_3/input.txt').toString().split("\n");

    const mapReader: MapReader = new MapReader(map);

    let adyacentNumbers: Array<number> = []

    for (let x = 0; x < map.length; x++) {
        for (let y = 0; y < map[x].length; y++) {
            if(map[x][y] == "*") {
                let numbers = mapReader.getAdyacentNumbers(x, y)
                if (numbers.length == 2) {
                    adyacentNumbers.push(numbers[0]*numbers[1])
                }
            }
        }
    }

    let sum = 0;
    adyacentNumbers.forEach( num => {
        sum += num;
    })

    console.log(sum)

}


main();