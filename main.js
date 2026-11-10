import Fornecedor from "./Fornecedor.js";
import FornecedorPessoa from "./FornecedorPessoa.js";

const objFornecedor = new Fornecedor("Pedro", "(11)97131-3131");

console.log(`Dados do Fornecedor:
        Nome: ${objFornecedor.getNome()}
        Nome: ${objFornecedor.getFone()}`);

const objFornecedorPessoa = new FornecedorPessoa("Maria", "(11)13131", "3213313", "1231313");


console.log(`Dados do Fornecedor Pessoa:
            Nome: ${objFornecedorPessoa.getNome()}
            Fone: ${objFornecedorPessoa.getFone()}
            Rg: ${objFornecedorPessoa.getRg()}
            Cpf: ${objFornecedorPessoa.getCpf()}`)

