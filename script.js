const errorContainerArray = Array.from(
  document.querySelectorAll(".input-container p")
);

const inputFieldArray = Array.from(
  document.querySelectorAll(".input-container input")
);

inputFieldArray.forEach((input) =>
  input.addEventListener("focus", (e) => {
    if (e.target.value === "") {
      e.target.addEventListener("change", checkValidity);
    } else {
      e.target.addEventListener("input", checkValidity);
    }
  })
);

function checkValidity() {
  const regex = new RegExp(this.pattern, "");
  const inputValue = this.value;
  const isMatch = inputValue.match(regex);
  const passwordInput = inputFieldArray[4];
  const checkPasswordInput = inputFieldArray[5];
  const getInputIndex = inputFieldArray.indexOf(this);
  let errorMessageField = errorContainerArray[getInputIndex];
  let isValid;

  if (this.name !== "check-password") {
    if (isMatch && inputValue.match(regex)[0] === inputValue) {
      isValid = true;
    } else {
      isValid = false;
    }

    if (this.name === "password" && checkPasswordInput.value !== "") {
      checkPasswordMatching(passwordInput, checkPasswordInput);
    }
  } else {
    if (
      inputValue === passwordInput.value &&
      passwordInput.getAttribute("class") === "valid"
    ) {
      isValid = true;
    } else {
      isValid = false;
    }
  }

  if (isValid) {
    this.classList.add("valid");
    this.classList.remove("invalid");
    errorMessageField.innerText = "";
  } else {
    this.classList.add("invalid");
    this.classList.remove("valid");
    errorMessageField.innerText = generateErrorMessage(this);
  }
  if (!this.hasAttribute("required") && this.value === "") {
    this.classList.remove("valid");
    this.classList.remove("invalid");
    errorMessageField.innerText = "";
  }
}

function checkPasswordMatching(input1, input2) {
  if (input1.value !== input2.value) {
    input2.classList.remove("valid");
    input2.classList.add("invalid");
  } else {
    input2.classList.remove("invalid");
    input2.classList.add("valid");
  }
}

function generateErrorMessage(input) {
  let errorMessage = "";
  if (input.value === "" && input.name !== "phone") {
    errorMessage = "Campo obbligatorio";
  } else {
    switch (input.name) {
      case "name":
      case "last-name":
        errorMessage =
          "Può contenere solo lettere, numeri, punti, trattini e spazi.";
        break;
      case "mail":
        errorMessage = "Inserire un formato mail corretto.";
        break;
      case "phone":
        errorMessage = "Inserire un numero di telefono valido.";
        break;
      case "password":
        errorMessage =
          "Deve contenere almeno 8 caretteri, una maiuscola, una minuscola e un numero.";
        break;
      case "check-password":
        errorMessage = "Deve corrisponde a una password valida.";
        break;
      default:
        break;
    }
  }
  return errorMessage;
}
