import { Calibrator } from "./calibrator";



describe('Calibrator', () => {


    it("should get the first digit in calibration line with 1 number", () => {
        //Arrenge
        const calibrationLine: string = 'treb7uchet';
        const calibrator: Calibrator = new Calibrator();

        //Act
        const digit: number = calibrator.getLineFirstDigit(calibrationLine)

        //Assert
        expect(digit).toBe(7)
    })

    it("should get the first digit in calibration line with 2 numbers", () => {
        //Arrenge
        const calibrationLine: string = '1abc2';
        const calibrator: Calibrator = new Calibrator();

        //Act
        const digit: number = calibrator.getLineFirstDigit(calibrationLine)

        //Assert
        expect(digit).toBe(1)
    })

    it("should get the first digit in calibration line with more than 2 numbers", () => {
        //Arrenge
        const calibrationLine: string = 'a2b2c3d4e5f';
        const calibrator: Calibrator = new Calibrator();

        //Act
        const digit: number = calibrator.getLineFirstDigit(calibrationLine)

        //Assert
        expect(digit).toBe(2)
    })

    it("should get the first digit in calibration line with 1 written number", () => {
        //Arrenge
        const calibrationLine: string = 'two7uchet';
        const calibrator: Calibrator = new Calibrator();

        //Act
        const digit: number = calibrator.getLineFirstDigit(calibrationLine)

        //Assert
        expect(digit).toBe(2)
    })


    it("should throw an error if no digits exists on line", () => {
        //Arrenge
        const calibrationLine: string = 'abcdfg';
        const calibrator: Calibrator = new Calibrator();

        //Assert
        expect(() => {calibrator.getLineFirstDigit(calibrationLine)}).toThrow(Error)
    })


    it("should get the last digit in calibration line with 1 number", () => {
        //Arrenge
        const calibrationLine: string = 'treb7uchet';
        const calibrator: Calibrator = new Calibrator();

        //Act
        const digit: number = calibrator.getLineLastDigit(calibrationLine)

        //Assert
        expect(digit).toBe(7)
    })

    it("should get the last digit in calibration line with 2 numbers", () => {
        //Arrenge
        const calibrationLine: string = '1abc2';
        const calibrator: Calibrator = new Calibrator();

        //Act
        const digit: number = calibrator.getLineLastDigit(calibrationLine)

        //Assert
        expect(digit).toBe(2)
    })

    it("should get the last digit in calibration line with more than 2 numbers", () => {
        //Arrenge
        const calibrationLine: string = 'a2b2c3d4e5f';
        const calibrator: Calibrator = new Calibrator();

        //Act
        const digit: number = calibrator.getLineLastDigit(calibrationLine)

        //Assert
        expect(digit).toBe(5)
    })

    it("should get the last digit in calibration line with 1 written number", () => {
        //Arrenge
        const calibrationLine: string = 'treb7utwo';
        const calibrator: Calibrator = new Calibrator();

        //Act
        const digit: number = calibrator.getLineLastDigit(calibrationLine)

        //Assert
        expect(digit).toBe(2)
    })


    it("should throw an error if no digits exists on line", () => {
        //Arrenge
        const calibrationLine: string = 'abcdfg';
        const calibrator: Calibrator = new Calibrator();

        //Assert
        expect(() => {calibrator.getLineLastDigit(calibrationLine)}).toThrow(Error)
    })

    it("should get the calibration number of a line with one digit", () => {
        //Arrenge
        const calibrationLine: string = 'treb7uchet';
        const calibrator: Calibrator = new Calibrator();

        //Act
        const digit: number = calibrator.getLineCalibrationnumber(calibrationLine)

        //Assert
        expect(digit).toBe(77)
    })

    it("should get the calibration number of a line with 2 numbers", () => {
        //Arrenge
        const calibrationLine: string = '1abc2';
        const calibrator: Calibrator = new Calibrator();

        //Act
        const digit: number = calibrator.getLineCalibrationnumber(calibrationLine)

        //Assert
        expect(digit).toBe(12)
    })

    it("should get the calibration number of a line with more than 2 numbers", () => {
        //Arrenge
        const calibrationLine: string = 'a2b2c3d4e5f';
        const calibrator: Calibrator = new Calibrator();

        //Act
        const digit: number = calibrator.getLineCalibrationnumber(calibrationLine)

        //Assert
        expect(digit).toBe(25)
    })

    it("should throw an error if no digits exists on line", () => {
        //Arrenge
        const calibrationLine: string = 'abcdfg';
        const calibrator: Calibrator = new Calibrator();

        //Assert
        expect(() => {calibrator.getLineCalibrationnumber(calibrationLine)}).toThrow(Error)
    })

})
