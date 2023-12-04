import { MapReader } from "./mapReader"

describe("MapReader", () => {

    it("should know if coordinates is number", () => {
        const map = ["...............307","....22............"]
        const mapReader = new MapReader(map)

        const foundNumber = mapReader.isNumber(1, 4)
        const notFoundNumber = mapReader.isNumber(1,1)

        expect(foundNumber).toBeTruthy()
        expect(notFoundNumber).toBeFalsy()
    })

    it("should know if coordinates is symbol", () => {
        const map = ["...+...........307","....22............"]
        const mapReader = new MapReader(map)

        const foundSymbol = mapReader.isSymbol(0, 3)
        const notFoundSymbol = mapReader.isSymbol(1, 4)

        expect(foundSymbol).toBeTruthy()
        expect(notFoundSymbol).toBeFalsy()
    })

    it("should know if coordinates is dot", () => {
        const map = ["...+...........307","....22............"]
        const mapReader = new MapReader(map)

        const foundDot = mapReader.isDot(1, 7)
        const notFoundDot = mapReader.isDot(1, 4)

        expect(foundDot).toBeTruthy()
        expect(notFoundDot).toBeFalsy()
    })

    it("should get adyacent numbers", () => {
        const map = ["121....","...x45.","...3..."]
        const mapReader = new MapReader(map)

        const adyacentNumbers = mapReader.getAdyacentNumbers(1, 3)

        expect(adyacentNumbers.includes(45)).toBeTruthy()
        expect(adyacentNumbers.includes(121)).toBeTruthy()
        expect(adyacentNumbers.includes(3)).toBeTruthy()
    })



})