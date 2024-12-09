import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransacaoService {
  private transacoes: any[] = [
    { id: 1, origem: 'Ouro Real', destino: 'Tibar', valor: 250, dataHora: new Date() },
    { id: 2, origem: 'Tibar', destino: 'Ouro Real', valor: 100, dataHora: new Date() },
  ];

  obterTransacoes(): any[] {
    return [...this.transacoes]; // Retorna uma cópia do array
  }

  adicionarTransacao(origem: string, destino: string, valor: number): void {
    const novaTransacao = {
      id: this.transacoes.length + 1,
      origem,
      destino,
      valor,
      dataHora: new Date(),
    };
    this.transacoes.push(novaTransacao);
    console.log('Transação adicionada com sucesso:', novaTransacao);
  }
}
