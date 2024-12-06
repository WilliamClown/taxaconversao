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
    this.transacoes.push({
      id: this.idCounter++,
      origem,
      destino,
      valor,
      data: new Date(),
    });
  }
  

  obterTransacoes(): {
    id: number;
    origem: string;
    destino: string;
    valor: number;
    data: Date;
  }[] {
    return this.transacoes.map(transacao => ({
      ...transacao,
      data: new Date(transacao.data), // Garante que data é um objeto Date
    }));
  }  
}
