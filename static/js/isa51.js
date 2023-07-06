var lista_isa = [
    ["A", "Analisador", "-","Alarme","-","-"],
    ["B", "Chama de Queimador", "-","Indefinida","Indefinida","Indefinida"],
    ["C", "Condutividade Elétrica", "-","-","Controlador","-"],
    ["D", "Densidade ou Mass Específica", "-","Diferencial","-","-"],
    ["E", "Tensão Elétrica", "-","Elemento Primário","-","-"],
    ["F", "Vazão", "Razão","-","Razão","-"],
    ["G", "Medida Dimensional", "-","Visor","Visor","-"],
    ["H", "Comando Manual", "-","-","Alto","Alto"],
    ["I", "Corrente Elétrica", "-","Indicador","Indicador","-"],
    ["J", "Potência", "Seletor","-","Seletor","-"],
    ["K", "Não Existe Definição", "Não Existe Definição","Não Existe Definição","Não Existe Definição","Não Existe Definição"],
    ["L", "Nível", "-","Lâmpada Piloto","Baixo","Baixo"],
    ["M", "Umidade", "-","-","-","-"],
    ["N", "Indefinida", "-","Indefinida","Indefinida","Indefinida"],
    ["O", "Indefinida", "-","Orifício de Restrição","-","-"],
    ["P", "Pressão", "-","Ponto de Teste","-","-"],
    ["Q", "Quantidade", "Totalizador","-","Totalizador","-"],
    ["R", "Radioatividade", "-","Registrador","-","-"],
    ["S", "Velocidade", "Segurança","-","Chave","-"],
    ["T", "Temperatura", "-","-","Transmissor ","-"],
    ["U", "Multivariável ", "-","Multifunção","Multifunção","Multifunção"],
    ["V", "Viscosidade", "-","-","Válvula","-"],
    ["W", "Peso ou Força", "-","Poço","-","-"],
    ["X", "Não Classificadar", "-","Não Classificada","Não Classificada","Não Classificada"],
    ["Y", "Indefinida", "-","-","Relé","-"],
    ["Z", "Posição", "-","-","Elemento Final de Controle não Classificado","-"],

];

console.log(lista_isa);

let read = document.getElementById("read-list").value
console.log('>>>>>>>>>>>>>>>>: ',read)
read.value = "ok";



var td = document.querySelector("td");

        // Lê o conteúdo da <td> usando textContent
        var conteudo1 = td.textContent;

        console.log(conteudo1);

        // Seleciona todas as <td>
        var tds = document.querySelectorAll("td");

        // Lê o conteúdo de cada <td> usando innerHTML
        tds.forEach(function(td) {
            var conteudo2 = td.innerHTML;
            console.log(conteudo2);
        });



for (var i = 0; i < lista_isa.length; i++) {
    var row = "<tr>";
    for (var j = 0; j < lista_isa[i].length; j++) {
        row += "<td>" + lista_isa[i][j] + "</td>";
    }
    row += "</tr>";
    document.write(row);
}

var table = document.createElement("table");

        var thead = document.createElement("thead");
        var headerRow = document.createElement("tr");

        var headers = ["Letra", "Descrição", "Valor A", "Valor B", "Valor C", "Valor D"];

        headers.forEach(function(headerText) {
            var th = document.createElement("th");
            th.appendChild(document.createTextNode(headerText));
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        var tbody = document.createElement("tbody");

        lista_isa.forEach(function(rowData) {
            var row = document.createElement("tr");

            rowData.forEach(function(cellData) {
                var cell = document.createElement("td");
                cell.appendChild(document.createTextNode(cellData));
                row.appendChild(cell);
            });

            tbody.appendChild(row);
        });

        table.appendChild(tbody);

        document.body.appendChild(table);