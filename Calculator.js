import { Input } from "./Input.js";
import { DigitButton } from "./DigitButton.js";
import { ActionButton } from "./ActionButton.js";

export class Calculator {
  constructor() {
    this.appcontainer = document.querySelector("#app");
    this.input = null;
    this.createInput();
    const buttonRows = [
      ["7", "8", "9", "+"],
      ["4", "5", "6", "-"],
      ["1", "2", "3", "*"],
      [".", "0", "=", "/"],
    ];
    buttonRows.forEach(this.createRowWithButtons);
  }
  createInput = () => {
    this.createRow().setAttribute("id", "display-line1");
    const displayLine1 = document.querySelector("#display-line1");
    displayLine1.classList.add(`display`);
    this.createRow().setAttribute("id", "display-line2");
    const displayLine2 = document.querySelector("#display-line2");
    displayLine2.classList.add(`display`);
    this.createRow().setAttribute("id", "input-container");
    const inputContainer = document.querySelector("#input-container");
    inputContainer.classList.add(`display`);
    this.input = new Input(inputContainer, displayLine1, displayLine2);
  };
  createRowWithButtons = (buttonsArray) => {
    const row = document.createElement("div");
    row.classList.add(`row`);
    for (let i = 0; i < buttonsArray.length; i++) {
      const buttonContainer = document.createElement("div");
      row.append(buttonContainer);
      if (
        Number(buttonsArray[i]) ||
        buttonsArray[i] === "." ||
        buttonsArray[i] === "0"
      ) {
        new DigitButton(buttonsArray[i], this, buttonContainer);
      } else {
        new ActionButton(buttonsArray[i], this, buttonContainer);
      }
    }
    this.appcontainer.append(row);
    return row;
  };

  createRow = () => {
    const row = document.createElement("div");
    this.appcontainer.append(row);
    return row;
  };
}
