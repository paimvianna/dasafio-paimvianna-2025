//lib para realizar os inputs do teclado.
import input_teclado from "readline-sync"

//array dos animais para adoção, com seus atributos.
let pets = [
    {pet_nome:"Rex",especie:"cão",brinquedos_do_pet:["rato","bola"]},
    {pet_nome:"Mimi",especie:"gato",brinquedos_do_pet:["bola","laser"]},
    {pet_nome:"Fofo",especie:"gato",brinquedos_do_pet:["bola","rato","laser"]},
    {pet_nome:"Zero",especie:"gato",brinquedos_do_pet:["rato","bola"]},
    {pet_nome:"Bola",especie:"cão",brinquedos_do_pet:["caixa","novelo"]},
    {pet_nome:"Bebe",especie:"cão",brinquedos_do_pet:["laser","rato","bola"]},
    {pet_nome:"Loco",especie:"jabuti",brinquedos_do_pet:["skate","rato"]}
];

function ler_teclado(parametro_funcao){
    let palavra_invalida = true;
    let resp_teclado;
    while(palavra_invalida){
        resp_teclado = input_teclado.question(parametro_funcao);
        if (resp_teclado != '' && isNaN(resp_teclado)){
            palavra_invalida = false;
        } else {
            console.error("A palavra informada so deve conter letras.");
        }
    }
    return resp_teclado
}
let lista_1 = ler_teclado("informe o nome do pet: ")
console.log(lista_1)