let contador = 0
let input = document.getElementById("input-lista");
let botaoAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");


function addTarefa (){

++contador;

    // PEGAR VALOR DIGITADO NO INPUT
let valorInput = input.value;


// SE NÃO FOR VAZIO NEM NULO NEM INDEFINIDO
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        let novoItem = `<div id="${contador}" class="item">
    <div onclick="marcarTarefa(${contador})" class="item-icon">
       <span id="icone_${contador}" class="mdi mdi-checkbox-blank-circle-outline"></span>
        </div>
    <div onclick="marcarTarefa(${contador})" class="item-nome">
       ${valorInput}
    </div>
     <div class="item-botao">
        <button onclick="deletar(${contador})" class="delete"><span class="mdi mdi-trash-can"></span>Deletar</button>
    </div>`;
// ADICIONAR O NOVO ITEM NO  MAIN
    main.innerHTML += novoItem;

// ZERA O CAMPO
input.value = ""
input.focus();

 }

}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}


function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute("class");
    var icone = document.getElementById('icone_' + id);

    if (classe == "item"){
        item.classList.add("clicado");
        icone.classList.remove("mdi-checkbox-blank-circle-outline");
        icone.classList.add("mdi-checkbox-marked-circle")

        item.parentNode.appendChild(item);

    } else {
        item.classList.remove("clicado");
        icone.classList.remove("mdi-checkbox-marked-circle");
        icone.classList.add("mdi-checkbox-blank-circle-outline")
    }
}


input.addEventListener("keyup", function(event){
    // SE TECLOU ENTER (13)
    if(event.keyCode === 13){
        event.preventDefault();
        botaoAdd.click();
    }

})

