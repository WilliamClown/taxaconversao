import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransacaoService {
  private transacoes: {
    id: number;
    origem: string;
    destino: string;
    valor: number;
    data: Date;
  }[] = [];
  private idCounter = 1;

  adicionarTransacao(origem: string, destino: string, valor: number): void {
    const novaTransacao = {
      id: this.idCounter++,
      origem,
      destino,
      valor,
      data: new Date(), // Data e hora da transação
    };
    this.transacoes.push(novaTransacao);
  }

  obterTransacoes() {
    return this.transacoes;
  }
}
