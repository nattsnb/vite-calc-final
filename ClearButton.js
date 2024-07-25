import { Button } from "./Button.js";

export class ClearButton extends Button {
  constructor(sign, calculator, buttonContainer) {
    super(sign, calculator, buttonContainer);
    this.setButton();
    this.initializeEventListener();
  }
  setButton = () => {
    this.buttonContainer.classList.add(`erease-button`);
  };
  initializeEventListener = () => {
    this.buttonContainer.addEventListener("click", this.clickOnClear);
  };
  clickOnClear = () => {
    this.clearButtonPressed();
  };

  clearButtonPressed = () => {
    this.calculator.input.clearCalculator();
  };
}
