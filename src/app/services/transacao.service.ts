import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransacaoService {
  private transacoes: any[] = [
    { id: 1, origem: 'Ouro Real', destino: 'Tibar', valor: 250, dataHora: new Date() },
    { id: 2, origem: 'Tibar', destino: 'Ouro Real', valor: 100, dataHora: new Date() },
  ]; // Inicializa com dados mockados

  obterTransacoes(): any[] {
    return [...this.transacoes]; // Retorna uma cópia do array para evitar mutações
  }

  adicionarTransacao(origem: string, destino: string, valor: number): void {
    const novaTransacao = {
      id: this.transacoes.length + 1, // Gera um ID único
      origem,
      destino,
      valor,
      dataHora: new Date(), // Adiciona a data e hora atual
    };
    this.transacoes.push(novaTransacao); // Adiciona ao array de transações
    console.log('Nova transação adicionada:', novaTransacao);
  }
}
