const prompt = require("prompt-sync")()
const {criar, atualizar, remover, listagem} = require("./pais.js")

while(true){
    console.log("1- Criar2- Listar   3- Atualizar cadastro4- remover" )

    const opcao = prompt("Qual opção você deseja?")

    switch (opcao) {
        case "1":
            criar()
            
        break;
        case "2":
            listagem()
        break;
        case "3":
            atualizar()
        break;
        case "4":
            remover()
        break;
        case "5":
            process.exit()
        break;
        default:
            console.log("Opção inválida")
        break;
    }

}



