
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

adicionarAluno("Carlos", "1º ano", 7.0, 8.5, 5.6);
adicionarAluno("Roberto", "2º ano", 3.5, 6.7, 7.0);
adicionarAluno("Celso", "3º ano", 9.5, 7.8, 5.6);
adicionarAluno("Lucas", "2º ano", 3.5, 6.7, 7.0);
adicionarAluno("Paulo", "1º ano", 3.5, 6.7, 7.0);
adicionarAluno("Eduardo", "3º ano", 3.5, 6.7, 7.0);
adicionarAluno("José", "1º ano", 2.0, 3.2, 8.8);

// adoro copiar e colar
adicionarAluno("Cleber", "1º ano", 9.8, 8.2, 8.0);
adicionarAluno("Fernanda", "2º ano", 2.1, 7.2, 5.6);
adicionarAluno("Marcos", "3º ano", 7.5, 6.8, 8.2);
adicionarAluno("Leandro", "3º ano", 8.8, 9.0, 0.4);
adicionarAluno("Paulo Santos", "1º ano", 7.4, 2.8, 5.9);
adicionarAluno("Carlos José", "1º ano", 9.9, 1.5, 5.8);
adicionarAluno("Lúcia", "3º ano", 9.6, 8.2, 9.7);
adicionarAluno("Ana", "2º ano", 7.8, 6.2, 2.7);
adicionarAluno("Carla", "3º ano", 6.5, 1.9, 4.1);
adicionarAluno("Kauã", "3º ano", 8.6, 9.1, 7.7);
adicionarAluno("Herbert Richers", "1º ano", 9.0, 5.9, 7.8);
adicionarAluno("Lebron James", "1º ano", 4.7, 0.4, 4.9);
adicionarAluno("Maria", "2º ano", 6.0, 7.7, 4.7);
adicionarAluno("Fernando", "3º ano", 8.8, 4.4, 2.0);
adicionarAluno("Paula", "2º ano", 9.6, 5.2, 4.0);
adicionarAluno("Gabriel", "3º ano", 3.8, 6.1, 1.5);
adicionarAluno("Renan", "1º ano", 4.7, 7.2, 5.1);
adicionarAluno("Carolina", "2º ano", 4.5, 6.5, 6.8);
adicionarAluno("Pedro", "2º ano", 8.1, 9.9, 4.7);

// mesma coisa do primeiro adicionarAlunos so que com turmas e notas diferentes :P
adicionarAluno("Carlos", "2º ano", 8.5, 6.5, 7.2);
adicionarAluno("Roberto", "3º ano", 6.3, 8.2, 4.6);
adicionarAluno("Celso", "1º ano", 7.2, 9, 8);
adicionarAluno("Lucas", "3º ano", 7.5, 6.7, 9);
adicionarAluno("Paulo", "2º ano", 8, 8.5, 8.6);
adicionarAluno("Eduardo", "1º ano", 6.8, 7, 6.6);
adicionarAluno("José", "2º ano", 4.7, 6.9, 7.8);


function encontrarAluno() {
    nomeDigitado = document.locateList.nome.value.toLowerCase();
    turmaDigitada = Math.round(document.locateList.turma.value);
    turmaDigitada = turmaDigitada.toString();

    let teste = document.getElementById("test");

    let tabela = document.getElementsByClassName("tabelaPrincipal").item(0);
    tabela.border = true;
    tabela.innerHTML = "<tr>" +
        "<th>Nome</th>" +
        "<th>Turma</th>" +
        "<th>1º Trimestre</th>" +
        "<th>2º Trimestre</th>" +
        "<th>3º Trimestre</th>" +
        "<th>Nota Média</th>" +
    "</tr>"
    let totalAlunos = 0
    for (let i = 0; i < alunos.length; i++) {
        let aluno = alunos[i];

        let media = Math.round((aluno.tri1 + aluno.tri2 + aluno.tri3) * 10 / 3) / 10
        let nome = aluno.nome.toLowerCase();
        let turma = aluno.turma.toLowerCase();
        if ((nomeDigitado != "" && nome.indexOf(nomeDigitado) == -1) || (turmaDigitada != 0 && turma.indexOf(turmaDigitada) == -1)) {
            continue
        }
        
        tabela.innerHTML += "<tr>" +
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
            "<td>" +
                media
            "</td>" +
        "</tr>"
        totalAlunos++
    }

    tabela.innerHTML += "<tr>" +
        "<td colspan=3>Total de Alunos Encontrados:</td>" +
        "<td colspan=3>" + totalAlunos + "</td>"
}