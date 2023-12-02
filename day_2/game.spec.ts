import { Game } from "./game";


describe("Game", () => {

    it("should return false if game is not possible with the given configuration", () => {
        // Arrange
        const game = new Game(12, 14, 10);

        // Act
        const isPossible = game.isPosible("Game 1: 1 red, 5 blue, 1 green; 16 blue, 3 red; 6 blue, 5 red; 4 red, 7 blue, 1 green")
        
        //Assert
        expect(isPossible).toBeFalsy()
    })

    it("should return true if game is possible with the given configuration", () => {
        // Arrange
        const game = new Game(12, 14, 10);

        // Act
        const isPossible = game.isPosible("Game 1: 1 red, 5 blue, 1 green; 14 blue, 3 red; 6 blue, 5 red; 4 red, 7 blue, 1 green")
        
        //Assert
        expect(isPossible).toBeTruthy()
    })


    it("should return the game ID", () => {
        // Arrange
        const game = new Game(12, 14, 10);

        // Act
        const gameId = game.getGameId("Game 1: 1 red, 5 blue, 1 green; 16 blue, 3 red; 6 blue, 5 red; 4 red, 7 blue, 1 green")
        
        //Assert
        expect(gameId).toBe(1)
    })

    it("should return the minimum set of a color", () => {
        // Arrange
        const game = new Game(12, 14, 10);

        // Act
        const gameId = game.getHigherOfColor("Game 1: 1 red, 5 blue, 3 green; 16 blue, 3 red; 6 blue, 5 red; 4 red, 7 blue, 1 green", "green")
        
        //Assert
        expect(gameId).toBe(3)
    })

    it("should return the power of minimums", () => {
        // Arrange
        const game = new Game(12, 14, 10);

        // Act
        const gameId = game.getPowerOfMinimuns("Game 1: 1 red, 5 blue, 3 green; 16 blue, 3 red; 6 blue, 5 red; 4 red, 7 blue, 1 green")
        
        //Assert
        expect(gameId).toBe(240)
    })

})