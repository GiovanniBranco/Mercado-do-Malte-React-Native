function formataReal(num) {
  return 'R$ ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, 'R$1,');
}

function formataPalavra(texto) {
  if (!texto) return;
  let words = texto.toString().split(' ');
  for (let a = 0; a < words.length; a++) {
    let w = words[a];
    words[a] = w[0].toUpperCase() + w.slice(1);
  }
  return words.join(' ');
}

export default {
  formataReal,
  formataPalavra,
};
