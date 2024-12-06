import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; 
import { MatIconModule } from '@angular/material/icon'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransacaoService } from '../../services/transacao.service';

@Component({
  selector: 'app-transacoes',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    MatCardModule, 
    MatIconModule,],
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.css'],
})
export class TransacoesComponent {
  moedaOrigem = 'Ouro Real';
  moedaDestino = 'Tibar';
  valorOrigem: number | null = null;

  constructor(private transacaoService: TransacaoService) {}

  registrarTransacao(): void {
    const valor = Number(this.valorOrigem);
  
    console.log('Valor de entrada:', this.valorOrigem, 'Valor convertido:', valor);
  
    if (isNaN(valor) || valor <= 0) {
      alert('Por favor, insira um valor válido maior que zero.');
      return;
    }
  
    if (this.moedaOrigem === this.moedaDestino) {
      alert('Por favor, selecione moedas diferentes.');
      return;
    }
  
    const valorConvertido =
      this.moedaOrigem === 'Ouro Real'
        ? valor * 2.5
        : valor / 2.5;
  
    this.transacaoService.adicionarTransacao(
      this.moedaOrigem,
      this.moedaDestino,
      valorConvertido
    );
  
    alert('Transação registrada com sucesso!');
    this.valorOrigem = null; // Limpa o campo de entrada
  }
}