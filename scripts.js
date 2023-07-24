const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const assunto = document.getElementById("assunto");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const assuntoValue = assunto.value;
  const mensagemValue = mensagem.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (assuntoValue === "") {
    setErrorFor(assunto, "O assunto é obrigatório.");
  } else {
    setSuccessFor(assunto);
  }

  if (mensagemValue === "") {
    setErrorFor(mensagem, "A mensagem é obrigatória.");
  } else {
    setSuccessFor(mensagem);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% validado!")
  }
}

function setErrorFor(input, mensagem) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adicionar el mensaje de error
  small.innerText = mensagem;

  // Adicionar la clase de error
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar la classe de éxito
  formControl.className = "form-control success";
}
  //const regex 
function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}