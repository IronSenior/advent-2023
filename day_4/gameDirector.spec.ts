import { GameDirector } from "./gameDirector"

describe("GameDirector", () => {

    it("should return the card ID", () => {
        //Arrange
        const gameDirector: GameDirector = new GameDirector(
            "Card   1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53"
        )

        //Act
        const cardId = gameDirector.cardId

        //Assert
        expect(cardId).toBe(1)
    })

    it("should return the list of winning numbers", () => {
        //Arrange
        const gameDirector: GameDirector = new GameDirector(
            "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53"
        )

        //Act
        const winningNumbers = gameDirector.winningNumbers

        //Assert
        expect(winningNumbers.length).toBe(5)
        expect(winningNumbers).toContain(41)
        expect(winningNumbers).toContain(48)
        expect(winningNumbers).toContain(83)
        expect(winningNumbers).toContain(17)
    })

    it("should return the list of played numbers", () => {
        //Arrange
        const gameDirector: GameDirector = new GameDirector(
            "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53"
        )

        //Act
        const playedNumbers = gameDirector.playedNumbers

        //Assert
        expect(playedNumbers.length).toBe(8)
        expect(playedNumbers).toContain(83)
        expect(playedNumbers).toContain(86)
        expect(playedNumbers).toContain(6)
        expect(playedNumbers).toContain(31)
        expect(playedNumbers).toContain(17)
        expect(playedNumbers).toContain(9)
        expect(playedNumbers).toContain(48)
        expect(playedNumbers).toContain(53)
    })

    it("should calculate the points", () => {
        //Arrange
        const gameDirector: GameDirector = new GameDirector(
            "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53"
        )

        //Act
        const points = gameDirector.points

        //Assert
        expect(points).toBe(8)
    })

})