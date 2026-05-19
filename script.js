fetch("quartos.json")
    .then(response => response.json())
    .then(quartos => {

        const lista = document.getElementById("lista-quartos");
        const contador = document.getElementById("contador");

        const disponiveis = quartos.filter(
            quarto => quarto.estado === "Disponível"
        );

        contador.textContent = "Quartos disponíveis: " + disponiveis.length;

        quartos.forEach(quarto => {
            const div = document.createElement("div");
            div.classList.add("quarto");

            const corEstado =
                quarto.estado === "Disponível" ? "green" : "red";

            div.innerHTML = `
                <h3>Quarto ${quarto.numero}</h3>
                <p>Tipo: ${quarto.tipo}</p>
                <p style="color:${corEstado}; font-weight:bold;">
                    Estado: ${quarto.estado}
                </p>
            `;

            lista.appendChild(div);
        });
    });

const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");
const listaPedidos = document.getElementById("lista-pedidos");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const curso = document.getElementById("curso").value;

    mensagem.textContent =
        "Pedido enviado com sucesso por " +
        nome +
        ", do curso " +
        curso +
        ".";

    const item = document.createElement("li");
    item.textContent = nome + " - " + curso + " ";

    const botaoApagar = document.createElement("button");
    botaoApagar.textContent = "Apagar";

    botaoApagar.addEventListener("click", function() {
        item.remove();
    });

    item.appendChild(botaoApagar);
    listaPedidos.appendChild(item);

    formulario.reset();
});
