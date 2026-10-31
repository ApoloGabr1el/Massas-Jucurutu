document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("#navbar");

  if (!navbar) return;

  fetch("components/navbar.html")
    .then((resposta) => {
      if (!resposta.ok) {
        throw new Error("Não foi possível carregar a navbar.");
      }

      return resposta.text();
    })
    .then((html) => {
      navbar.innerHTML = html;
    })
    .catch((erro) => {
      console.error(erro);
    });
});
