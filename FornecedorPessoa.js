import Fornecedor from "./Fornecedor.js";

class FornecedorPessoa extends Fornecedor{
    #rg;
    #cpf;


    constructor(nome = "Sem nome", fone ="(00) 0000-0000", rg=" ", cpf = " "){
        super(nome,fone);
        this.#rg = rg;
        this.#cpf = cpf;
    }

    setRg(rg){
        this.#rg = rg;
    }

    setCpf(cpf){
        this.#cpf;
    }

    getRg(){
        return this.#rg;
    }

    getCpf(){
        return this.#rg;
    }

}

export default FornecedorPessoa;