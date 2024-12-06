import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa o FormsModule para usar [(ngModel)]

@Component({
  selector: 'app-painel-conversao',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './painel-conversao.component.html',
  styleUrls: ['./painel-conversao.component.css'],
})
export class PainelConversaoComponent {
  moedaOrigem = 'Ouro Real';
  moedaDestino = 'Tibar';
  valorOrigem: number | null = null;
  valorConvertido: number | null = null;
  taxaAtual = 2.5; // Taxa inicial padrão

  atualizarTaxa(): void {
    const novaTaxa = parseFloat(
      prompt('Informe a nova taxa de conversão (Ouro Real para Tibar):', this.taxaAtual.toString()) || '0'
    );
    if (novaTaxa > 0) {
      this.taxaAtual = novaTaxa;
      alert('Taxa atualizada com sucesso!');
    } else {
      alert('Taxa inválida.');
    }
  }

  registrarTransacao(): void {
    if (this.valorOrigem === null || this.valorOrigem <= 0) {
      alert('Por favor, insira um valor válido.');
      return;
    }

    this.valorConvertido = this.moedaOrigem === 'Ouro Real'
      ? this.valorOrigem * this.taxaAtual
      : this.valorOrigem / this.taxaAtual;

    alert('Conversão realizada com sucesso!');
  }
}
