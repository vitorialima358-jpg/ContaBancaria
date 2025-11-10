import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {

  private rendimento: number;

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    rendimento: number
  ) {
    super(numero, agencia, tipo, titular, saldo);
    this.rendimento = rendimento;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`Rendimento: ${this.rendimento.toFixed(2)}%`);
  }
}
