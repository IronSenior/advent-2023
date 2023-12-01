import { Calibrator } from "./calibrator";
import * as fs from "fs";
import readline from "readline"


async function main() {
    let calibrationnumber: number = 0;
    const calibrator: Calibrator = new Calibrator();
    const fileStream = fs.createReadStream('./day_1/input.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
      });

    for await(let line of rl){
        calibrationnumber = calibrationnumber + calibrator.getLineCalibrationnumber(line);
    }

    console.log(calibrationnumber)
}


main();