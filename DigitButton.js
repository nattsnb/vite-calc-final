import { Button } from "./Button.js";

export class DigitButton extends Button {
  constructor(sign, calculator, buttonContainer) {
    super(sign, calculator, buttonContainer);
    this.initializeEventListener();
  }
  initializeEventListener = () => {
    this.buttonContainer.addEventListener("click", this.clickOnDigit);
  };
  clickOnDigit = () => {
    this.digitButtonPressed(this.sign);
  };

  digitButtonPressed = (digit) => {
    if (this.calculator.input.firstNumberPresentButNoEqSign()) {
    } else if (digit !== ".") {
      this.calculator.input.addDigitToInputContainer(digit)
    } else if (this.calculator.input.inputDoesntIncludeDot()) {
      if (this.calculator.input.inputContainer.innerHTML === "") {
        this.calculator.input.inputContainer.innerHTML = "0.";
      } else {
        this.calculator.input.addDotToInput(digit)
      }
    }
  };
}
