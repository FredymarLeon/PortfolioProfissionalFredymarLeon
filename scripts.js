const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const assunto = document.getElementById("assunto");
const mensagem = document.getElementById("mensagem");
const repositorios = document.getElementById("repositorios")

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

//portafolio javaScript

const getApiGitHub = () => {
  fetch("https://api.github.com/users/FredymarLeon/repos").then(async (res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    let data = await res.json();
    console.log(data)
    data.map((repo) => {
      let project = document.createElement("div");
      project.classList.add("repos");
      project.innerHTML = `
      <div class="project">
        <div>
          <h4 class="project-title">${repo.name}</h4>
          <a target="_blank" href="${repo.html_url}" class="url">${
        repo.html_url
      }</a>
        </div>
        <div class="data-punto">
          <span class="data">${Intl.DateTimeFormat("pt-BR").format(
            new Date(repo.created_at)
          )}</span>
          <div class="punto">
            <div class="circulo"></div>
            <span class="lenguaje">${repo.language}</span>
          </div>
        </div>
      </div>
      `;

    repositorios.appendChild(project);
  });

});
}

getApiGitHub();