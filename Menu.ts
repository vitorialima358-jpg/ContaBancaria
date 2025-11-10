import readlinesync = require("readline-sync");
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { colors } from './src/util/Colors';

export function main() {
  let opcao: number;

  const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
  const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);

  contacorrente.visualizar();
  contacorrente.sacar(2000);
  contacorrente.depositar(1000);
  contacorrente.visualizar();

  contapoupanca.visualizar();
  contapoupanca.sacar(200);
  contapoupanca.depositar(1000);
  contapoupanca.visualizar();

  while (true) {
    console.log(colors.bg.black, colors.fg.yellow, "*****************************************************");
    console.log("               BANCO DO BRAZIL COM Z                ");
    console.log("*****************************************************");
    console.log("1 - Criar Conta");
    console.log("2 - Listar todas as Contas");
    console.log("3 - Buscar Conta por Número");
    console.log("4 - Atualizar Conta");
    console.log("5 - Apagar Conta");
    console.log("6 - Sacar");
    console.log("7 - Depositar");
    console.log("8 - Transferir");
    console.log("9 - Sair");
    console.log("*****************************************************");
    console.log("                                                     ", colors.reset);

    opcao = readlinesync.questionInt("Entre com a opção desejada: ");

    if (opcao === 9) {
      console.log(colors.fg.greenstrong, "\nBanco do Brazil com Z - O seu futuro começa aqui!");
      sobre();
      console.log(colors.reset, "");
      process.exit(0);
    }

    console.log(colors.fg.whitestrong, `\nOpção ${opcao} selecionada (em construção)\n`, colors.reset);
    keyPress();
  }
}

function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por Vitória");
  console.log("Generation Brasil - generation@generation.org");
  console.log("*****************************************************");
}

function keyPress(): void {
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

main();
