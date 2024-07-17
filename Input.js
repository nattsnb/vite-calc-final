export class Input {
  constructor(inputContainer, displayLineFirst, displayLineSecond) {
    this.inputContainer = inputContainer;
    this.firstNumber = null;
    this.secondNumber = null;
    this.eqSign = null;
    this.displayLineFirst = displayLineFirst;
    this.displayLineSecond = displayLineSecond;
  }
  digitButtonPressed = (digit) => {
    if (this.firstNumber && !this.eqSign) {
    } else if (digit !== ".") {
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
    if (
      sign === "-" &&
      this.inputContainer.innerHTML === "" &&
      this.eqSign !== null
    ) {
      this.inputContainer.innerHTML = "-";
    }
    if (
      this.firstNumber === null &&
      this.checkIfInputIsCorrect() &&
      sign !== "="
    ) {
      this.saveFirstNumberAndSign(sign);
    } else if (
      this.firstNumber === null &&
      this.checkIfInputIsCorrect() &&
      sign === "="
    ) {
    } else if (this.inputContainer.innerHTML === "" && sign === "=") {
    } else if (this.secondNumber === null && this.checkIfInputIsCorrect()) {
      this.startNextEqUsingResult(sign);
    } else {
      this.setAndDisplayEqSign(sign);
    }
  };
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
    )
  }

  doTheEq = () => {
    if (this.eqSign === "+") {
      return (this.firstNumber + this.secondNumber).toFixed(2);
    }
    if (this.eqSign === "-") {
      return (this.firstNumber - this.secondNumber).toFixed(2);
    }
    if (this.eqSign === "*") {
      return (this.firstNumber * this.secondNumber).toFixed(2);
    }
    if (this.eqSign === "/") {
      if(this.secondNumber === 0){
        return "ERROR"
      }else{
        return (this.firstNumber / this.secondNumber).toFixed(2);
      }
    }
  };
}
