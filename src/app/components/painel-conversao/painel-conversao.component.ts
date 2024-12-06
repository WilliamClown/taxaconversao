import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; 
import { MatIconModule } from '@angular/material/icon'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa o FormsModule para usar [(ngModel)]

@Component({
  selector: 'app-painel-conversao',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    MatCardModule, 
    MatIconModule,],
  templateUrl: './painel-conversao.component.html',
  styleUrls: ['./painel-conversao.component.css'],
})
export class PainelConversaoComponent {
  moedaOrigem = 'Ouro Real';
  moedaDestino = 'Tibar';
  valorOrigem: number | null = null;
  valorConvertido: number | null = null;
  taxaAtual = 2.5;

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

  realizarConversao(): void {
    if (!this.valorOrigem || this.valorOrigem <= 0) {
      alert('Por favor, insira um valor válido.');
      return;
    }

    if (this.moedaOrigem === this.moedaDestino) {
      alert('Por favor, selecione moedas diferentes.');
      return;
    }

    this.valorConvertido =
      this.moedaOrigem === 'Ouro Real'
        ? this.valorOrigem * this.taxaAtual
        : this.valorOrigem / this.taxaAtual;
  }
}