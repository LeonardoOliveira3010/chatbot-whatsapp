const venom = require('venom-bot');
const banco = require('./banco')
const stages = require('./stages')

.create()
.then((client) => start(client))
.catch((erro) => {
console.log(erro);
});


let resp = stages.step[getStage('5515998582454@c.us')].obj.execute()
for (let index = 0; index < Array(resp).lenght; index++) {
    const element = Array(resp)[index]
    console.log(element)
}

// Iniciando a aplicação
function start(client) {
    // Ouvir a mensagem
    client.onMessage((message) => {
        // Mandar a mensagem juntamente com o stage
        client.sendText(
            message.from, 
            stages.step[getStage('5515998582454@c.us')].obj.execute()
        )
    });
}  

// Retornando Usuario
const getStage = (user) =>{
    return banco.db[user].stage
}

// console.log(stages.step[getStage('user1')].obj.execute())


