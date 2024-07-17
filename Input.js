export class Input {
  constructor(inputContainer, displayLineFirst, displayLineSecond) {
    this.inputContainer = inputContainer;
    this.firstNumber = null;
    this.secondNumber = null;
    this.eqSign = null;
    this.displayLineFirst = displayLineFirst;
    this.displayLineSecond = displayLineSecond;
  }

  firstNumberPresentButNoEqSign() {
    return this.firstNumber && !this.eqSign;
  }
  addDigitToInputContainer(digit) {
    this.inputContainer.innerHTML = this.inputContainer.innerHTML + digit;
  }
  inputDoesntIncludeDot() {
    return this.inputContainer.innerHTML.includes(".") !== true;
  }
  addDotToInput(digit) {
    this.inputContainer.innerHTML = this.inputContainer.innerHTML + digit;
  }

  minusClickedBeforeNumber(sign) {
    return (
      sign === "-" &&
      this.inputContainer.innerHTML === "" &&
      this.eqSign !== null
    );
  }
  actionButtonPressedWhileFirstOperation(sign) {
    return (
      this.firstNumber === null && this.checkIfInputIsCorrect() && sign !== "="
    );
  }

  eqButtonPressedWhileFirstOperation(sign) {
    return (
      this.firstNumber === null && this.checkIfInputIsCorrect() && sign === "="
    );
  }

  eqButtonPressedWithNoInput(sign) {
    return this.inputContainer.innerHTML === "" && sign === "=";
  }
  actionButtonPressedAfterDisplayingResult() {
    return this.secondNumber === null && this.checkIfInputIsCorrect();
  }

  startNextEqUsingResult(sign) {
    this.secondNumber = this.convertInputToNumber();
    this.inputContainer.innerHTML = "";
    this.firstNumber = this.doTheEq();
    this.saveResultAndCleanInput();
    if (sign !== "=") {
      this.setAndDisplayEqSign(sign);
    }
  }

  setAndDisplayEqSign = (sign) => {
    this.eqSign = sign;
    this.displayLineSecond.innerHTML = sign;
  };
  saveFirstNumberAndSign = (sign) => {
    this.firstNumber = this.convertInputToNumber();
    this.inputContainer.innerHTML = "";
    this.displayLineFirst.innerHTML = this.firstNumber;
    this.eqSign = sign;
    this.displayLineSecond.innerHTML = this.eqSign;
  };

  saveResultAndCleanInput = () => {
    this.displayLineFirst.innerHTML = this.firstNumber;
    this.eqSign = null;
    this.secondNumber = null;
    this.displayLineSecond.innerHTML = "";
    this.inputContainer.innerHTML = "";
  };

  convertInputToNumber = () => {
    return parseFloat(this.inputContainer.innerHTML);
  };
  checkIfInputIsCorrect() {
    return (
      this.inputContainer.innerHTML !== "" &&
      this.inputContainer.innerHTML !== "-" &&
      this.inputContainer.innerHTML !== "-0." &&
      this.inputContainer.innerHTML !== "-0"
    );
  }

  doTheEq = () => {
    if (this.eqSign === "+") {
      const result = (this.firstNumber + this.secondNumber).toFixed(2);
      return parseFloat(result);
    }
    if (this.eqSign === "-") {
      const result = (this.firstNumber - this.secondNumber).toFixed(2);
      return parseFloat(result);
    }
    if (this.eqSign === "*") {
      const result = (this.firstNumber * this.secondNumber).toFixed(2);
      return parseFloat(result);
    }
    if (this.eqSign === "/" && this.secondNumber === 0) {
      return "ERROR";
    } else if (this.eqSign === "/") {
      const result = (this.firstNumber / this.secondNumber).toFixed(2);
      return parseFloat(result);
    }
  };
}
