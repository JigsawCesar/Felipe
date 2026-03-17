const prompt = require(`prompt-sync`)()

let grupo = {
    nome: `Lions`,
    orcamentoTotal: 500,
    openBarFechado: false,
    consumoExtras: []
};


let bebidas = {
    nome: (prompt(`Digite o nome da bebida importada: `)),
    valorTotal: (prompt(`Digite o valor da bebida importada: `))
};

grupo.consumoExtras.push(bebidas);

console.log(grupo);