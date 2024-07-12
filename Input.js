export class Input {
  constructor(inputContainer, displayLine1, displayLine2) {
    this.inputContainer = inputContainer;
    this.firstNumber = null;
    this.secondNumber = null;
    this.eqSign = null;
    this.displayLine1 = displayLine1;
    this.displayLine2 = displayLine2;
  }
  digitButtonPressed = (digit) => {
    if (digit !== ".") {
      this.inputContainer.innerHTML = this.inputContainer.innerHTML + digit;
    } else if (this.inputContainer.innerHTML.includes(".") !== true) {
      if (this.inputContainer.innerHTML === "") {
        this.inputContainer.innerHTML = "0.";
      } else {
        this.inputContainer.innerHTML = this.inputContainer.innerHTML + digit;
      }
    }
  };

  actionButtonPressed = (sign) => {
    if (sign === "-" && this.inputContainer.innerHTML === "") {
      this.inputContainer.innerHTML = "-";
    }
    if (this.firstNumber === null && this.checkIfInputIsCorrect()) {
      this.firstNumber = this.convertInputToNumber();
      this.displayLine1.innerHTML = this.firstNumber;
    }
  };

  convertInputToNumber() {
    return parseFloat(this.inputContainer.innerHTML);
  }
  checkIfInputIsCorrect() {
    if (
      this.inputContainer.innerHTML !== "" &&
      this.inputContainer.innerHTML !== "-" &&
      this.inputContainer.innerHTML !== "-0." &&
      this.inputContainer.innerHTML !== "-0"
    ) {
      return true;
    }
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
