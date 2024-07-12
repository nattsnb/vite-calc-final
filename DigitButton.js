import { Button } from "./Button.js";

export class DigitButton extends Button {
    constructor(sign, calculator, buttonContainer) {
        super(sign, calculator, buttonContainer);
        // this.initializeEventListener();
    }
    // initializeEventListener = () => {
    //     this.buttonContainer.addEventListener("click", this.clickOnDigit);
    // };
    // clickOnDigit = () => {
    //     this.calculator.input.digitButtonPressed(this.sign);
    // };
}