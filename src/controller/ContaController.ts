import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";
export class ContaController implements ContaRepository{
   
    private listarContas: Array< Conta> = new Array <Conta> ();

    numero: number = 0;

     listarTodas(): void {
        for (let conta of this.listarContas) {
            conta.visualizar();
        }
    }

   

    cadastrar(conta: Conta): void {
        this.listarContas.push(conta);
        console.log(colors.fg.green, "\nA conta numero: " + conta.numero+
            "foi criada com sucesso!", colors.reset);
    
    }
    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }
    deletar(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta != null) {
        this.listarContas.splice(this.listarContas.indexOf(buscaConta), 1);
        console.log(colors.fg.green, "\nA Conta numero: " + numero + " foi apagada com sucesso!", colors.reset);
    } else {
        console.log(colors.fg.red, "\nA Conta numero: " + numero + " não foi encontrada!", colors.reset);
    }
}

    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }


            gerarNumero(): number {
                return ++this.numero;
}




    public buscarNoArray( numero: number) : Conta | null{
    
        for (let conta of this.listarContas){

            if (conta.numero === numero)
                return conta;

        }
    return null;
    
    }
        procurarPorNumero(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta != null) {
        buscaConta.visualizar();
    } else {
        console.log(colors.fg.red, "\nA Conta numero: " + numero + " não foi encontrada!", colors.reset);
    }
}



}
