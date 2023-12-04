

type FoundNumber = {
    number: number;
    first_coordinate: number;
    last_coordinate: number;
}

export class MapReader {
    private _map: Array<string>;


    constructor(map: Array<string>) {
        this._map = map;
    }

    public isSymbol(x: number, y: number) {
        return !this.isDot(x, y) && !this.isNumber(x, y)
    }

    public isDot(x: number, y: number) {
        const line = this._map[x]
        const foundElement = line[y]

        if (foundElement == ".") {
            return true
        }
        return false
    }

    public isNumber(x: number, y: number) {
        const line = this._map[x]
        const foundElement = line[y]

        if (!isNaN(Number(foundElement))){
            return true
        }

        return false
    }


    public getCoordinateNumber(x: number, y: number) {
        const line = this._map[x]
        const foundElement = line[y]

        if (!this.isNumber(x, y)) {
            return null
        }

        let numbers = foundElement

        for (let i = y+1; i < line.length; i++) {
            const character = line.charAt(i);
            if (! isNaN(Number(character))){
                numbers = numbers + character
            } else {
                break;
            }
        }

        for (let i = y-1; i >= 0; i--) {
            const character = line.charAt(i);
            if (! isNaN(Number(character))){
                numbers = character + numbers
            } else {
                break;
            }
        }

        return Number(numbers)
    }
    
    public getAdyacentNumbers(x: number, y: number) {        
        let adyacentNumbers: Array<number> = []

        if ( y+1 < this._map[x].length && this.isNumber(x, y+1)){
            let foundNumber = this.getCoordinateNumber(x, y+1)
            if (foundNumber != null) {
                adyacentNumbers.push(foundNumber)
            }
        }

        if (y-1 >= 0 && this.isNumber(x, y-1)) {
            let foundNumber = this.getCoordinateNumber(x, y-1)
            if (foundNumber != null) {
                adyacentNumbers.push(foundNumber)
            }
        }

        if (x != 0) {
            if (this.isNumber(x-1, y)) {
                let foundNumber = this.getCoordinateNumber(x-1, y)
                if (foundNumber != null) {
                    adyacentNumbers.push(foundNumber)
                }
            } else {
                let foundNumber = this.getCoordinateNumber(x-1, y-1)
                if (foundNumber != null) {
                    adyacentNumbers.push(foundNumber)
                }
                foundNumber = this.getCoordinateNumber(x-1, y+1)
                if (foundNumber != null) {
                    adyacentNumbers.push(foundNumber)
                }
            }
        }

        if (x+1 == this._map.length) {
            return adyacentNumbers;
        }

        if (this.isNumber(x+1, y)) {
            let foundNumber = this.getCoordinateNumber(x+1, y)
            if (foundNumber != null) {
                adyacentNumbers.push(foundNumber)
            }
        } else {
            let foundNumber = this.getCoordinateNumber(x+1, y-1)
            if (foundNumber != null) {
                adyacentNumbers.push(foundNumber)
            }
            foundNumber = this.getCoordinateNumber(x+1, y+1)
            if (foundNumber != null) {
                adyacentNumbers.push(foundNumber)
            }
        }
        return adyacentNumbers

    }
}