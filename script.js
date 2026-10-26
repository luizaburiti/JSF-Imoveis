const form = document.getElementById("leadForm");
const whatsappNumber = "5511996924703"; // Número com código do Brasil + DDD

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const email = document.getElementById("email").value.trim();
  const interesses = Array.from(
    document.querySelectorAll('input[name="interesse"]:checked')
  ).map((item) => item.value);

  if (!nome || !telefone || !email) {
    alert("Preencha seu nome, telefone e e-mail para continuar.");
    return;
  }

  const mensagem = [
    "Olá! Tenho interesse em ser um franqueado e gostaria de receber mais informações.",
    "",
    `Nome: ${nome}`,
    `Telefone: ${telefone}`,
    `E-mail: ${email}`,
    `Interesses: ${interesses.length ? interesses.join(", ") : "Gostaria de conhecer as oportunidades disponíveis."}`
  ].join("\n");

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
