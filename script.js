// Rolagem suave
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Formulário de contato
document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  document.getElementById("mensagem").textContent = `Obrigado ${nome}, entraremos em contato pelo email ${email}!`;
  this.reset();
});

