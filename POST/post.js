// Chamando funcao do botao 
function enviarDados() {

    // Variável que irá armazenar as informações do form
    var form = document.getElementById("form");

    // Criando um evento que impede de enviar o formulário vazio
    form.addEventListener("submit", (e) => {
        // Evita que o formulario seja enviado de forma padrao
        e.preventDefault();

        // Criando variáveis para armazenar os valores digitados no input
        var nome = document.getElementById("nome").value;
        var sobrenome = document.getElementById("sobrenome").value;
        var telefone = document.getElementById("telefone").value;
        var rg = document.getElementById("rg").value;
        var cpf = document.getElementById("cpf").value;
        var idade = document.getElementById("idade").value;
        var curso = document.getElementById("curso").value;
        var escola = document.getElementById("escola").value;

        // Testando se as informações do input estão chegando no console 
        console.log({
            nome, sobrenome, telefone, rg,
            cpf, idade, curso, escola
        });

        // Enviando os dados para o servidor
        fetch(`http://localhost:3000/registro`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                sobrenome: sobrenome,
                telefone: telefone,
                rg: rg,
                cpf: cpf,
                idade: idade,
                curso: curso,
                escola: escola
            })
        })
        .then(resposta => resposta.json()) // Chamando o .then fora do corpo de 'fetch'
        .then(dados => {
            console.log("Dados enviados com sucesso:", dados);
        }) // Aviso caso nao for possivel o envio dos dados
        .catch(erro => {
            console.error("Erro ao enviar dados:", erro);
        });
    });
}
