import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransacaoService {
  private taxaAtual: number = 2.5; // Define uma taxa inicial padrão
  private transacoes: { date: Date; valorEmOuro: number; valorEmTibar: number }[] = [
    // Adicione transações iniciais para teste
    { date: new Date(), valorEmOuro: 100, valorEmTibar: 250 },
    { date: new Date(), valorEmOuro: 50, valorEmTibar: 125 },
  ];

  obterTransacoes() {
    return this.transacoes.map(transacao => ({
      ...transacao,
      date: new Date(transacao.date), // Garante que `date` é um objeto `Date`
    }));
  }

  adicionarTransacao(valorEmOuro: number, taxa: number) {
    const valorEmTibar = valorEmOuro * taxa;
    this.transacoes.push({
      date: new Date(), // Certifique-se de que `date` é sempre um objeto `Date`
      valorEmOuro,
      valorEmTibar,
    });
  }
  

   // Método para obter a taxa atual
   obterTaxaAtual(): number {
    return this.taxaAtual;
  }

  // Método para atualizar a taxa
  atualizarTaxa(novaTaxa: number): void {
    this.taxaAtual = novaTaxa;
  }
}
