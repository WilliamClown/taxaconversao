import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatSelectModule } from '@angular/material/select'; 
import { MatInputModule } from '@angular/material/input'; 
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
    MatIconModule,
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule, 
  ],
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
        ? valor * 2.5 // Taxa de conversão Ouro Real -> Tibar
        : valor / 2.5; // Taxa de conversão Tibar -> Ouro Real

    this.transacaoService.adicionarTransacao(
      this.moedaOrigem,
      this.moedaDestino,
      valorConvertido
    );

    alert('Transação registrada com sucesso!');
    this.valorOrigem = null; // Limpa o campo de entrada
  }
}
