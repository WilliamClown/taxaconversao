import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa o FormsModule
import { CommonModule } from '@angular/common'; // Importa o CommonModule para diretivas padrão
import { TransacaoService } from '../../services/transacao.service';

@Component({
  selector: 'app-painel-conversao',
  standalone: true,
  imports: [CommonModule, FormsModule], // Inclua FormsModule e CommonModule
  templateUrl: './painel-conversao.component.html',
  styleUrls: ['./painel-conversao.component.css'],
})
export class PainelConversaoComponent {
  moedaOrigem = 'Ouro Real';
  moedaDestino = 'Tibar';
  valorOrigem: number | null = null;
  taxaAtual = 2.5;
  valorConvertido: number | null = null;
  mensagemErro = '';

  constructor(private transacaoService: TransacaoService) {}

  registrarTransacao() {
    if (this.valorOrigem !== null && this.valorOrigem > 0) {
      this.transacaoService.adicionarTransacao(this.valorOrigem, this.taxaAtual);
      alert('Transação registrada com sucesso!');
      this.valorOrigem = null;
    } else {
      alert('Por favor, insira um valor válido.');
    }
  }

  abrirModalAtualizarTaxa() {
    const novaTaxa = parseFloat(prompt('Informe a nova taxa de conversão:', this.taxaAtual.toString()) || '0');
    if (novaTaxa > 0) {
      this.taxaAtual = novaTaxa;
      alert('Taxa atualizada com sucesso!');
    } else {
      alert('Taxa inválida.');
    }
  }

  realizarConversao() {
    if (this.valorOrigem === null || this.valorOrigem <= 0) {
      this.mensagemErro = 'Por favor, insira um valor válido.';
      this.valorConvertido = null;
      return;
    }

    this.mensagemErro = '';
    if (this.moedaOrigem === 'Ouro Real' && this.moedaDestino === 'Tibar') {
      this.valorConvertido = this.valorOrigem * this.taxaAtual;
    } else if (this.moedaOrigem === 'Tibar' && this.moedaDestino === 'Ouro Real') {
      this.valorConvertido = this.valorOrigem / this.taxaAtual;
    } else {
      this.valorConvertido = this.valorOrigem;
    }
  }
}
