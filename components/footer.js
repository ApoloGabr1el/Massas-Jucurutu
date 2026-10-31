document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("#footer");

  if (!footer) return;

  fetch("components/footer.html")
    .then((resposta) => {
      if (!resposta.ok) {
        throw new Error("Não foi possível carregar o footer.");
      }

      return resposta.text();
    })
    .then((html) => {
      footer.innerHTML = html;
    })
    .catch((erro) => {
      console.error(erro);
    });
});
