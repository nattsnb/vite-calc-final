import { Button } from "./Button.js";

export class DeleteButton extends Button {
  constructor(sign, calculator, buttonContainer) {
    super(sign, calculator, buttonContainer);
    this.setButton();
    this.initializeEventListener();
  }
  setButton = () => {
    this.buttonContainer.classList.add(`erease-button`);
  };
  initializeEventListener = () => {
    this.buttonContainer.addEventListener("click", this.clickOnDelete);
  };
  clickOnDelete = () => {
    this.deleteButtonPressed();
  };

  deleteButtonPressed = () => {
    this.calculator.input.deleteLastDigitFromInput();
  };
}
