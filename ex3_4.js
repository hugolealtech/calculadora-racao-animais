/*
Elaborar um programa para uma veterinária, que leia o peso de uma razão em kg e o quanto um gato consome por dia da ração em gramas.
Informe quantos dias irá durar a ração e quanto sobra da ração (em gramas) 
*/


// Função para calcular a estimativa de duração e a sobra de ração
// Função para criar campos dinamicamente e calcular estimativa de duração e sobra de ração
document.getElementById("btCalculo").addEventListener("click", function () {
    const pesoRacao = parseFloat(document.getElementById("inPesoRacao").value);
    const consumoDiario = parseFloat(document.getElementById("inConsumoDiario").value);

    // Verifica se os valores são válidos
    if (isNaN(pesoRacao) || isNaN(consumoDiario) || pesoRacao <= 0 || consumoDiario <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Calcula a estimativa de duração e a sobra
    const dias = Math.floor(pesoRacao / consumoDiario); // Número inteiro de dias
    const sobra = pesoRacao % consumoDiario;            // Sobra em gramas

    // Verifica se os elementos já foram adicionados para evitar duplicação
    if (!document.getElementById("outDias") && !document.getElementById("outGramas")) {
        // Adiciona os campos de saída ao DOM
        document.querySelector("main").insertAdjacentHTML("beforeend", `
            <div class="mt-4">
                <label for="outDias" class="form-label">A RAÇÃO DURARÁ POR (dias):</label>
                <input type="number" id="outDias" class="form-control" readonly>
            </div>
            <div class="mt-3">
                <label for="outGramas" class="form-label">VAI SOBRAR (gramas):</label>
                <input type="number" id="outGramas" class="form-control" readonly>
            </div>
        `);
    }

    // Define os valores nos campos de saída
    document.getElementById("outDias").value = dias;
    document.getElementById("outGramas").value = sobra.toFixed(2);
});
