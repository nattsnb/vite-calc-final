import { Button } from "./Button.js";

export class ActionButton extends Button {
  constructor(sign, calculator, buttonContainer) {
    super(sign, calculator, buttonContainer);
    this.initializeEventListener();
  }
  initializeEventListener = () => {
    this.buttonContainer.addEventListener("click", this.clickOnAction);
  };
  clickOnAction = () => {
    this.actionButtonPressed(this.sign);
  };
  actionButtonPressed = (sign) => {
    if (this.calculator.input.minusClickedBeforeNumber(sign)) {
      this.calculator.input.inputContainer.innerHTML = "-";
    }
    if (this.calculator.input.actionButtonPressedWhileFirstOperation(sign)) {
      this.calculator.input.saveFirstNumberAndSign(sign);
    } else if (this.calculator.input.eqButtonPressedWhileFirstOperation(sign)) {
    } else if (this.calculator.input.eqButtonPressedWithNoInput(sign)) {
    } else if (
      this.calculator.input.actionButtonPressedAfterDisplayingResult()
    ) {
      this.calculator.input.startNextEqUsingResult(sign);
    } else {
      this.calculator.input.setAndDisplayEqSign(sign);
    }
  };
}
