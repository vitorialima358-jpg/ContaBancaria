export class Conta {

  public numero: number;
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

  public sacar(valor: number): boolean {
    if (valor > this.saldo) {
      console.log("\nSaldo insuficiente!");
      return false;
    }
    this.saldo -= valor;
    return true;
  }

  public depositar(valor: number): void {
    this.saldo += valor;
  }

  public visualizar(): void {
    let tipoConta = this.tipo === 1 ? "Conta Corrente" : "Conta Poupança";

    console.log("\n*****************************************************");
    console.log("Dados da Conta:");
    console.log("*****************************************************");
    console.log(`Número: ${this.numero}`);
    console.log(`Agência: ${this.agencia}`);
    console.log(`Tipo: ${tipoConta}`);
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
  }


  public getTipo(): number {
  return this.tipo;
}
}


