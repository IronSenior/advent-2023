
type Limits = {
    red: number,
    blue: number,
    green: number
}


export class Game {
    private _limits: Limits;

    constructor(red: number, blue: number, green: number) {
        this._limits = {
            "red": red,
            "blue": blue,
            "green": green
        }
    }

    private _checkColor(line: string, color: keyof typeof this._limits){
        const reg = new RegExp(`([0-9]+) ${color}`, 'g')
        let match;
        while ((match = reg.exec(line)) !== null) {
            if (Number(match[1]) > this._limits[color]) {
                return false
            }
        }
        return true
    }

    public isPosible(line: string): boolean {
        const checkRed = this._checkColor(line, "red")
        const checkBlue = this._checkColor(line, "blue")
        const checkGreen = this._checkColor(line, "green")
        return checkRed && checkBlue && checkGreen
    }

    public getGameId(line: string): number {
        const reg = new RegExp("Game ([0-9]+):")
        const match = reg.exec(line)

        if (match == null) {
            return 0
        }

        return Number(match[1])
    }

    public getHigherOfColor(line: string, color: keyof typeof this._limits) {
        const reg = new RegExp(`([0-9]+) ${color}`, 'g')
        let higher = 0;
        let match;
        while ((match = reg.exec(line)) !== null) {
            if (Number(match[1]) > higher) {
                higher = Number(match[1])
            }
        }
        return higher
    }

    public getPowerOfMinimuns(line: string) {
        return this.getHigherOfColor(line, "red") * this.getHigherOfColor(line, "blue") * this.getHigherOfColor(line, "green")
    }

}