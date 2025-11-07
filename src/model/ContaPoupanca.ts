export class Conta {
  protected numero: number;
  protected agencia: number;
  protected tipo: number;
  protected titular: string;
  protected saldo: number;

  constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
    this.numero = numero;
    this.agencia = agencia;
    this.tipo = tipo;
    this.titular = titular;
    this.saldo = saldo;
  }

  public sacar(valor: number): void {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente!");
    } else {
      this.saldo -= valor;
      console.log("Saque realizado com sucesso!");
    }
  }

  public depositar(valor: number): void {
    this.saldo += valor;
    console.log("Depósito realizado com sucesso!");
  }

  public visualizar(): void {
    console.log(`Conta: ${this.numero} | Titular: ${this.titular} | Saldo: ${this.saldo}`);
  }
}
