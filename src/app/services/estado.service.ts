import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EstadoService {
  private taxaAtual: number = 2.5; // Taxa inicial
  private conversoes: any[] = []; // Lista de conversões

  // Métodos para manipular a taxa
  obterTaxaAtual(): number {
    return this.taxaAtual;
  }

  atualizarTaxa(novaTaxa: number): void {
    this.taxaAtual = novaTaxa;
  }

  // Métodos para manipular as conversões
  obterConversoes(): any[] {
    return this.conversoes;
  }

  adicionarConversao(conversao: any): void {
    this.conversoes.push(conversao);
  }
}
