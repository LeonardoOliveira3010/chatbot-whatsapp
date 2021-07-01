const stages = {
    0: {
        descricao: "Boas vindas",
        obj: require('./stages/boas-vindas')
    },

    1: {
        descricao: "Vendas",
        obj: require('./stages/vendas')
    },

    2: {
        descricao: "Resumo",
        obj: require('./stages/resumo')
    },

    3: {
        descricao: "Encerramento",
        obj: require('./stages/encerramento')
    }
}

exports.step = stages