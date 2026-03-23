const prompt = require(`prompt-sync`)();

let nivel;
let salario;

const funcionario = () => {
    nivel = parseInt(prompt(`Digite o nível do seu cargo: `));
    salario = parseFloat(prompt(`Digite o salário atual: `));

    switch (nivel) {
        
        case 1:
            salario += salario * 0.1;
        break;
        
        case 2:
            salario += salario * 0.15;
        break;

        case 3:
            salario += salario * 0.2;
        break;

        default
}

}