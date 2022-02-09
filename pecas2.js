let listaDePecas = ["Bobina de ignição", "Correia Dentada", "Pastilha de freio"]
    console.log(listaDePecas)
// Definir quantidade máxima permitida para cadastro de novas peças.
    if (listaDePecas.length < 4) {
        console.log("É possível cadastrar novas peças")
    }   else {
        console.log("Não é permitido cadastrar novas peças.")
    }
// Definir peso mínimo para cadastro de novas peças.
var peso = 101
    if (peso <= 100) {
        console.log("Peso insuficiente para cadastro de nova peça")
    } else {
        console.log("Peso suficiente para cadastro de novas peças")
    }
// Definir quantidade mínima de caracteres para cadastro de novas peças.
let nomeDaPeca = "Amortecedor"
    if (nomeDaPeca.length < 3) {
        console.log("O nome da peça deve possuir mais de 3 caracteres")
    } else if (nomeDaPeca.length == 0)  {
        console.log("O nome da peça não pode ser vazio")
    } else  {
        console.log("O nome da peça está válido para cadastro")
        
    }
// Definir quantidade mínima de caracteres utilizando "switchcase"
switch (nomeDaPeca.length) {
    case 0:
        console.log("O nome da peça não pode ser vazio")
        break;
    
    case 1:
    case 2:
    case 3:
        console.log("O nome da peça deve possuir mais de 3 caracteres")
        break;
    default:
        console.log("O nome da peça está válido para cadastro")
        break;
}