export class Button {
    constructor(sign, calculator, buttonContainer) {
        this.calculator = calculator;
        this.sign = sign;
        this.buttonContainer = buttonContainer;
        this.setButton();
        this.changeButtonSign();
    }
    setButton = () => {
        this.buttonContainer.classList.add(`button`);
    };
    changeButtonSign = () => {
        this.buttonContainer.innerHTML = this.sign;
    };
}