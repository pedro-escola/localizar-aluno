
var alunos = [];
/**
 * adiciona um aluno no array :P
 * @param {string} nome - nome do aluno
 * @param {string} turma - turma do aluno
 * @param {number} nota1 - nota do 1º trimestre
 * @param {number} nota2 - nota do 2º trimestre
 * @param {number} nota3 - nota do 3º trimestre
*/
function adicionarAluno(nome, turma, nota1, nota2, nota3) {
    alunos = alunos.concat({
        nome: nome,
        turma: turma,
        tri1: nota1,
        tri2: nota2,
        tri3: nota3
    })
}

adicionarAluno("Carlos", "1º Ano", 70, 85, 56);
adicionarAluno("Roberto", "2º Ano", 35, 67, 70);
adicionarAluno("Celso", "3º Ano", 95, 78, 56);

function encontrarAluno() {
    nomeDigitado = document.locateList.nome.value;
    turmaDigitada = document.locateList.turma.value;

    document.write(
        '<table class="tabelaPrincipal">' +
            "<tr>" +
                "<th>Nome</th>" +
                "<th>Turma</th>" +
                "<th>1º Trimestre</th>" +
                "<th>2º Trimestre</th>" +
                "<th>3º Trimestre</th>" +
            "</tr>"
    )
    for (let i = 0; i < alunos.length; i++) {
        
    }
    document.write(
        "</table>"
    )
}