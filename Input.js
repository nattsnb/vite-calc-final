export class Input {
    constructor(inputContainer, displayLine1, displayLine2) {
        this.inputContainer = inputContainer;
        this.firstNumber = null;
        this.secondNumber = null;
        this.eqSign = null;
        this.displayLine1 = displayLine1;
        this.displayLine2 = displayLine2;
    }
    doTheEq = () => {
        if (this.eqSign === "+") {
            return (Number(this.firstNumber) + Number(this.secondNumber)).toFixed(2);
        }
        if (this.eqSign === "-") {
            return (this.firstNumber - this.secondNumber).toFixed(2);
        }
        if (this.eqSign === "*") {
            return (this.firstNumber * this.secondNumber).toFixed(2);
        }
        if (this.eqSign === "/") {
            return (this.firstNumber / this.secondNumber).toFixed(2);
        }
    };
}