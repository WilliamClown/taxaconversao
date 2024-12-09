import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
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
  mensagemErro: string | null = null; // Mensagem de erro para exibição

  constructor(private transacaoService: TransacaoService) {}

  registrarTransacao(): void {
    const valor = Number(this.valorOrigem);

    if (isNaN(valor) || valor <= 0) {
      this.mensagemErro = 'Por favor, insira um valor válido maior que zero.'; 
      return;
    }

    if (this.moedaOrigem === this.moedaDestino) {
      this.mensagemErro = 'Por favor, selecione moedas diferentes.'; 
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
    this.mensagemErro = ''; 
    console.log('Nova transação registrada:', {
      origem: this.moedaOrigem,
      destino: this.moedaDestino,
      valor: valorConvertido,
    });
    this.valorOrigem = null; // Limpa o campo de entrada
  }
}
