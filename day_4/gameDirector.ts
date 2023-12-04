

export class GameDirector {

    private _winningNumbers: Array<number>;
    private _playedNumbers: Array<number>;
    private _points: number;
    private _cardId: number;

    constructor(line: string){
        this._winningNumbers = line.split(":")[1].split("|")[0].trim().replaceAll("  ", " ").split(" ").map(function (x) {
            return parseInt(x, 10); 
        });

        this._playedNumbers = line.split(":")[1].split("|")[1].trim().replaceAll("  ", " ").split(" ").map(function (x) {
            return parseInt(x.trim(), 10); 
        });

        this._cardId = Number(line.split(":")[0].replaceAll("   ", " ").replaceAll("  ", " ").split(" ")[1])

        this._points = this._calculatePoints();
    }
    
    public get winningNumbers() : Array<number> {
        return this._winningNumbers;
    }

    public get playedNumbers() : Array<number> {
        return this._playedNumbers;
    }

    public get points() : number {
        return this._points;
    }

    
    public get cardId() : number {
        return this._cardId
    }
    

    public wins(): number {
        let totalWins = 0;

        for (let play of this._playedNumbers) {
            if (this._winningNumbers.includes(play)){
                totalWins++;
            }
        }
        return totalWins
    }

    private _calculatePoints(): number {
        let totalWins = this.wins()

        if (totalWins <= 1){
            return totalWins;
        }

        totalWins = Math.pow(2, (totalWins - 1))

        return totalWins
    }
    
}