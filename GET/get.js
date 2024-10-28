// Puxando os dados registrados no servidor local
fetch(`http://localhost:3000/registro`).then(resposta => resposta.json()).then(dados =>{

    //Localizando a tabela do html, que futuramente serao armazenados os dados registrados no POST
    const corpoTabela = document.getElementById('corpo-tabela')

    // Loop que a variavel pessoa ira passar por cada objeto registrado dentro do JSON
    dados.forEach(pessoa => {
        
        // Variaveis para criar tags na tabela em html
        var tr = document.createElement('tr')
        var tdNome = document.createElement('td')
        var tdSobrenome = document.createElement('td')
        var tdTelefone = document.createElement('td')
        var tdRG = document.createElement('td')
        var tdCPF = document.createElement('td')
        var tdIdade = document.createElement('td')
        var tdCurso = document.createElement('td')
        var tdEscola = document.createElement('td')

        //Para cada elemento, armazenamos os dados que foram obtidos pelas variaveis
        tdNome.innerText = pessoa.nome
        tdSobrenome.innerText = pessoa.sobrenome
        tdTelefone.innerText = pessoa.telefone
        tdRG.innerText = pessoa.rg
        tdCPF.innerText = pessoa.cpf
        tdIdade.innerText = pessoa.idade
        tdCurso.innerText = pessoa.curso
        tdEscola.innerText = pessoa.escola

        // Incluindo as tags <td> e <tr>
        tr.appendChild(tdNome)
        tr.appendChild(tdSobrenome)
        tr.appendChild(tdTelefone)
        tr.appendChild(tdRG)
        tr.appendChild(tdCPF)
        tr.appendChild(tdIdade)
        tr.appendChild(tdCurso)
        tr.appendChild(tdEscola)

        // Carregando as informacoes na tabela, que foram tiradas do JSON
        corpoTabela.appendChild(tr)
    })
})
