const inputFieldArray = Array.from(
  document.querySelectorAll(".input-container input")
);

const checkValidityPattern = [
  {
    input: "name",
    pattern: "",
  },
  {
    input: "email",
    pattern: "",
  },
  {
    input: "password",
    pattern: "",
  },
];

inputFieldArray.forEach((input) =>
  input.addEventListener("change", checkValidity)
);

function checkValidity() {
  switch (this.name) {
    case "name":
    case "last-name":
      console.log("Name");
      break;
    case "mail":
      console.log("mail");
      break;
    case "phone":
      console.log("Phone");
      break;
    case "password":
      console.log("password");
      break;
    default:
      break;
  }

  //mettere uno switch per verifica della validità
}
