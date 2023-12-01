
export class Calibrator {

    private _translator = {
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    }

    public getLineFirstDigit(line: string): number {
        const regexp = new RegExp('([0-9]|two|one|two|three|four|five|six|seven|eight|nine)')
        let result = regexp.exec(line)

        if (result == null){
            throw new Error('Line has no digits');
        }

        let finalNumber = result[1];

        if (["one","two","three","four","five","six","seven","eight","nine"].includes(finalNumber)){
            finalNumber = this._translator[finalNumber]
        }

        return Number(finalNumber)
    }

    public getLineLastDigit(line: string): number {
        const regexp = new RegExp('.*([0-9]|two|one|two|three|four|five|six|seven|eight|nine)')
        let result = regexp.exec(line)
        
        if (result == null){
            throw new Error('Line has no digits');
        }

        let finalNumber = result[1];

        if (["one","two","three","four","five","six","seven","eight","nine"].includes(finalNumber)){
            finalNumber = this._translator[finalNumber]
        }

        return Number(finalNumber)
    }

    public getLineCalibrationnumber(line: string): number {
        const firstDigit: number = this.getLineFirstDigit(line)
        const lastDigit: number = this.getLineLastDigit(line)

        const calibrationnumber: number = Number(firstDigit.toString() + lastDigit.toString());

        return calibrationnumber;
    }

}
