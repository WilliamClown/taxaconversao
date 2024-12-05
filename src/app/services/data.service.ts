import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private taxas = [{ date: new Date(), rate: 2.5 }];
  private transacoes: { date: Date; valorEmOuro: number; valorEmTibar: number }[] = [];

  getTaxaAtual() {
    return this.taxas[this.taxas.length - 1];
  }

  atualizarTaxa(novaTaxa: number) {
    this.taxas.push({ date: new Date(), rate: novaTaxa });
  }

  registrarTransacao(valorEmOuro: number) {
    const taxaAtual = this.getTaxaAtual().rate;
    const valorEmTibar = valorEmOuro * taxaAtual;
    this.transacoes.push({ date: new Date(), valorEmOuro, valorEmTibar });
  }

  getHistoricoTransacoes() {
    return this.transacoes;
  }

  getHistoricoTaxas() {
    return this.taxas;
  }
}