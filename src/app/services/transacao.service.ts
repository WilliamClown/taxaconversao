import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransacaoService {
  // Dados mockados iniciais
  private transacoes: any[] = [
    { id: 1, origem: 'Ouro Real', destino: 'Tibar', valor: 250, data: new Date() },
    { id: 2, origem: 'Tibar', destino: 'Ouro Real', valor: 100, data: new Date() },
  ];

  // Obtém todas as transações
  obterTransacoes(): any[] {
    return [...this.transacoes]; // Retorna uma cópia dos dados
  }

  // Adiciona uma nova transação
  adicionarTransacao(origem: string, destino: string, valor: number): void {
    const novaTransacao = {
      id: this.transacoes.length + 1,
      origem,
      destino,
      valor,
      data: new Date(),
    };
    this.transacoes.push(novaTransacao);
  }
}
