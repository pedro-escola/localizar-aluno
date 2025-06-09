
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
    if (nota1 > 10) {
        nota1 /= 10
    }
    if (nota2 > 10) {
        nota2 /= 10
    }
    if (nota3 > 10) {
        nota3 /= 10
    }
    alunos = alunos.concat({
        nome: nome,
        turma: turma,
        tri1: nota1,
        tri2: nota2,
        tri3: nota3
    })
}

adicionarAluno("Carlos", "1º Ano", 7.0, 8.5, 5.6);
adicionarAluno("Roberto", "2º Ano", 3.5, 6.7, 7.0);
adicionarAluno("Celso", "3º Ano", 9.5, 7.8, 5.6);
adicionarAluno("Lucas", "2º Ano", 3.5, 6.7, 7.0);
adicionarAluno("Paulo", "1º Ano", 3.5, 6.7, 7.0);
adicionarAluno("Eduardo", "3º Ano", 3.5, 6.7, 7.0);

function encontrarAluno() {
    nomeDigitado = document.locateList.nome.value.toLowerCase();
    turmaDigitada = Math.round(document.locateList.turma.value);
    turmaDigitada = turmaDigitada.toString();

    // complicado ter que reescrever o html inteiro :P
    // document.write nem é recomendado :P
    document.write(
        '<!DOCTYPE html>' +
        '<html lang="pt-br">' +
        "<head>" +
            '<meta charset="UTF-8">' +
            '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
            '<title>localizacao uhul!</title>' +
            '<link rel="stylesheet" href="assets/styles.css">' +
            '<script src="assets/main.js"></script>' +
        "</head>" +

        "<body>" +
            '<table class="tabelaPrincipal" border>' +
                "<tr>" +
                    "<th>Nome</th>" +
                    "<th>Turma</th>" +
                    "<th>1º Trimestre</th>" +
                    "<th>2º Trimestre</th>" +
                    "<th>3º Trimestre</th>" +
                "</tr>"
    )
    for (let i = 0; i < alunos.length; i++) {
        let aluno = alunos[i];

        let nome = aluno.nome.toLowerCase();
        let turma = aluno.turma.toLowerCase();
        if ((nomeDigitado != "" && nome.search(nomeDigitado) == -1) || (turmaDigitada != 0 && turma.search(turmaDigitada) == -1)) {
            continue
        }
        
        document.write(
            "<tr>" +
                "<td>" +
                    aluno.nome +
                "</td>" +
                "<td>" +
                    aluno.turma +
                "</td>" +
                "<td>" +
                    aluno.tri1 +
                "</td>" +
                "<td>" +
                    aluno.tri2 +
                "</td>" +
                "<td>" +
                    aluno.tri3 +
                "</td>" +
            "</tr>"
        )
    }
    document.write(
        "</table>"
    )
}