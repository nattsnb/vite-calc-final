import { Button } from "./Button.js";

export class ActionButton extends Button {
    constructor(sign, calculator, buttonContainer) {
        super(sign, calculator, buttonContainer);
        // this.initializeEventListener();
    }
    // initializeEventListener = () => {
    //     this.buttonContainer.addEventListener("click", this.clickOnAction);
    // };
    // clickOnAction = () => {
    //     this.calculator.input.actionButtonPressed(this.sign);
    // };
    //
    // deleteEventListener = () => {
    //     this.buttonContainer.removeEventListener("click", this.clickOnAction);
    // }
}