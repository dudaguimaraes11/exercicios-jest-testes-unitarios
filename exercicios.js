
// exercicios.js - Módulo de Funções de Negócio

// 1. Calculadora de média com validação de limites
function calcularMedia(nota1, nota2, nota3) {
    const notas = [nota1, nota2, nota3];

    for (const nota of notas) {
        if (nota < 0 || nota > 10) {
            throw new Error('Nota inválida: deve estar entre 0 e 10');
        }
    }

    return notas.reduce((total, nota) => total + nota, 0) / notas.length;
}


// 2. Verificador de aprovação acadêmica por nota e frequência
function verificarAprovacao(nota, frequencia) {
    return nota >= 7 && frequencia >= 75;
}


// 3. Classificador de faixa etária
function classificarFaixaEtaria(idade) {
    if (idade < 0) {
        throw new Error('Idade não pode ser negativa');
    }

    if (idade <= 12) {
        return 'Criança';
    }
    if (idade <= 17) {
        return 'Adolescente';
    }
    if (idade <= 59) {
        return 'Adulto';
    }
    return 'Idoso';
}


// 4. Conversor de quilômetros para milhas
function converterKmParaMilhas(km) {
    if (km < 0) {
        throw new Error('Distância não pode ser negativa');
    }

    return km * 0.621371;
}


// 5. Gerador de e-mail corporativo padronizado
function gerarEmailCorporativo(nome, sobrenome, dominio) {
    return `${nome.trim().toLowerCase()}.${sobrenome.trim().toLowerCase()}@${dominio.trim().toLowerCase()}`;
}


// 6. Adição imutável de itens no carrinho
function adicionarItemCarrinho(carrinho, item) {
    return [...carrinho, item];
}


// 7. Calculadora de salário líquido com desconto percentual
function calcularSalarioLiquido(salario, desconto) {
    if (salario <= 0 || desconto < 0 || desconto > 100) {
        throw new Error('Valores de salário ou desconto inválidos');
    }

    return salario - (salario * desconto / 100);
}


// 8. Fábrica de objetos de produtos
function criarProduto(id, nome, preco, categoria) {
    if (preco <= 0) {
        throw new Error('Preço deve ser maior que zero');
    }

    return {
        id,
        nome,
        preco,
        categoria,
        emEstoque: true
    };
}


// 9. Validador geométrico de triângulos
function ehTrianguloValido(lado1, lado2, lado3) {
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        return false;
    }

    return lado1 + lado2 > lado3
        && lado1 + lado3 > lado2
        && lado2 + lado3 > lado1;
}


// 10. Removedor imutável de elementos em array
function removerElemento(lista, elemento) {
    return lista.filter(item => item !== elemento);
}


// Exportação CommonJS para consumo pelo Jest
module.exports = {
    calcularMedia,
    verificarAprovacao,
    classificarFaixaEtaria,
    converterKmParaMilhas,
    gerarEmailCorporativo,
    adicionarItemCarrinho,
    calcularSalarioLiquido,
    criarProduto,
    ehTrianguloValido,
    removerElemento
};
