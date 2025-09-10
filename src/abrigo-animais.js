import input_teclado from "readline-sync"
//let pets = []
class AbrigoAnimais {

pets = [
    {pet_nome:"Rex",especie:"cão",brinquedos_do_pet:["rato","bola"]},
    {pet_nome:"Mimi",especie:"gato",brinquedos_do_pet:["bola","laser"]},
    {pet_nome:"Fofo",especie:"gato",brinquedos_do_pet:["bola","rato","laser"]},
    {pet_nome:"Zero",especie:"gato",brinquedos_do_pet:["rato","bola"]},
    {pet_nome:"Bola",especie:"cão",brinquedos_do_pet:["caixa","novelo"]},
    {pet_nome:"Bebe",especie:"cão",brinquedos_do_pet:["laser","rato","bola"]},
    {pet_nome:"Loco",especie:"jabuti",brinquedos_do_pet:["skate","rato"]}
];

 encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    let petsConfirmados = [];
    let petsNaoConfirmados = [];
    let listaPessoa1 = [];
    let listaPessoa2 = [];
    let resultado = [];
    for (let nomeInput of ordemAnimais){
        let petEncontrado = false;
        for (let petLista of this.pets){
            if(nomeInput.toLowerCase() === petLista.pet_nome.toLocaleLowerCase()){
                petsConfirmados.push(petLista);
                petEncontrado = true;
                break;
            }
        }
        if (!petEncontrado){
            petsNaoConfirmados.push(nomeInput);
        }
    }
    //usei para controle console.log(petsConfirmados);
    //usei para controle console.log(petsNaoConfirmados)
    if (petsConfirmados == 0 ){
        console.log("+++O nome ou nomes dos Animais Informados.+++")
        for (let naovalido =0;naovalido < petsNaoConfirmados.leng;naovalido++) {
        console.log(petsNaoConfirmados[naovalido]);    
            
        }
    }
    else{ // usei para verificar se estava recebendoconsole.log(petsConfirmados);
    let controle_ordem;
    let cont;
    let situacao;
    if (petsConfirmados.length != 0){
        for (let petConfirmado of petsConfirmados) {
            controle_ordem = -1;
            cont=0;
            situacao = "abrigo";
            
             let listaBrinquedosPet = petConfirmado.brinquedos_do_pet;
            for (let brinquedoPet of listaBrinquedosPet) {
                // confiramando se esta lendo o array corretamente console.log(lista_briquedos[brinqCont4]);
                for (let brinquedoPessoa of brinquedosPessoa1) {
                    //usei para controle console.log("lista dos pets cofirmados "+ brinquedoPet);
                    //usei para controle console.log("lista dos brinquedosPessoa1 "+ brinquedoPessoa);
                    if (brinquedoPet.toLocaleLowerCase() == brinquedoPessoa.toLowerCase()){
                        let indiceOrdem = brinquedosPessoa1.indexOf(brinquedoPessoa)
                        
                        //console.log(indiceOrdem)
                        //console.log(controle_ordem)
                        if (controle_ordem < indiceOrdem){
                            controle_ordem = indiceOrdem
                            cont ++;
                            //console.log('1 '+cont) usei para controle.
                            //console.log('2 esse e o tamanho da lista de brinquedos do pet.' +listaBrinquedosPet.length) usei para controle.
                            if (cont == listaBrinquedosPet.length){
                                situacao = "pessoa 1"
                            }
                            
                        }else{

                            console.log("Brinquedos fora de ordem.")
                            
                        }
                    }
                    
                }
            }
            listaPessoa1.push(petConfirmado.pet_nome + ' - '+ situacao); 
            console.log(petConfirmado.pet_nome+" - "+ situacao);
        }
    }
    if (petsConfirmados.length != 0){
        for (let petConfirmado of petsConfirmados) {
            controle_ordem = -1;
            cont=0;
            situacao = "abrigo";
            
             let listaBrinquedosPet = petConfirmado.brinquedos_do_pet;
            for (let brinquedoPet of listaBrinquedosPet) {
                // confiramando se esta lendo o array corretamente console.log(lista_briquedos[brinqCont4]);
                for (let brinquedoPessoa of brinquedosPessoa2) {
                    //usei para controle console.log("lista dos pets cofirmados "+ brinquedoPet);
                    //usei para controle console.log("lista dos brinquedosPessoa1 "+ brinquedoPessoa);
                    if (brinquedoPet.toLocaleLowerCase() == brinquedoPessoa.toLowerCase()){
                        let indiceOrdem = brinquedosPessoa2.indexOf(brinquedoPessoa)
                        
                        //console.log(indiceOrdem)
                        //console.log(controle_ordem)
                        if (controle_ordem < indiceOrdem){
                            controle_ordem = indiceOrdem
                            cont ++;
                            //console.log('1 '+cont) usei para controle.
                            //console.log('2 esse e o tamanho da lista de brinquedos do pet.' +listaBrinquedosPet.length) usei para controle.
                            if (cont == listaBrinquedosPet.length){
                                situacao = "pessoa 2"
                            }
                            
                        }
                    }
                    
                }
            }
            listaPessoa2.push(petConfirmado.pet_nome + ' - '+ situacao); 
            //console.log(petConfirmado.pet_nome+" - "+ situacao);
        }
    }
}
console.log(listaPessoa1)
console.log(listaPessoa2)
}
}
function ler_teclado(parametro_funcao){
    let palavra_invalida = true;
    let resp_teclado;
    while(palavra_invalida){
        resp_teclado = input_teclado.question(parametro_funcao);
        if (resp_teclado != '' && isNaN(resp_teclado)){
            palavra_invalida = false;
        } else {
            console.error("A palavra informada deve conter somente letras.");
        }
    }
    let string_para_array = resp_teclado.split(',');
    return string_para_array
}

let brinquedosPessoa1 = ler_teclado("Informe os brinquedos primeiro candidato: ");
let brinquedosPessoa2 = ler_teclado("Informe os brinquedos segundo candidato; ");
let ordemAnimais = ler_teclado("Informa a ordem dos Pets: ");
new AbrigoAnimais().encontraPessoas(brinquedosPessoa1,brinquedosPessoa2,ordemAnimais);
export { AbrigoAnimais as AbrigoAnimais };