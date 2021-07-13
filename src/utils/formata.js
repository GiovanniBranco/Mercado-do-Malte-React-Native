function formataReal(valor) {
  return Number(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function formataPalavra(texto) {
  if (!texto) return;
  let words = texto.toString().split(" ");
  for (let a = 0; a < words.length; a++) {
    let w = words[a];
    words[a] = w[0].toUpperCase() + w.slice(1);
  }
  return words.join(" ");
}

export default {
  formataReal,
  formataPalavra,
};