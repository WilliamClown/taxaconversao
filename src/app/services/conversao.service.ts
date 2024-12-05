import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConversaoService {
  private taxaAtual = 2.5; // Taxa inicial padrão
  private historicoConversoes: { origem: string; destino: string; valorOrigem: number; valorDestino: number }[] = [];

  obterTaxaAtual() {
    return this.taxaAtual;
  }

  atualizarTaxa(novaTaxa: number) {
    this.taxaAtual = novaTaxa;
  }

  registrarConversao(origem: string, destino: string, valorOrigem: number, valorDestino: number) {
    this.historicoConversoes.push({ origem, destino, valorOrigem, valorDestino });
  }

  obterHistoricoConversoes() {
    return this.historicoConversoes;
  }
}
