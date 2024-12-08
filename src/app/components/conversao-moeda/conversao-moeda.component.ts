import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conversao-moeda',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatPaginatorModule,
    FormsModule,
  ],
  templateUrl: './conversao-moeda.component.html',
  styleUrls: ['./conversao-moeda.component.css'],
})
export class ConversaoMoedaComponent {
  valor: number | null = null; // Valor inserido pelo usuário
  moedaOrigem: string | null = null; // Moeda de origem
  moedaDestino: string | null = null; // Moeda de destino
  taxaAtual = 2.5; // Taxa de conversão atual
  resultado: number | null = null; // Resultado da conversão
  conversoes: Array<{
    id: number;
    moedaOrigem: string;
    moedaDestino: string;
    valor: number;
    taxa: number;
    dataHora: Date;
  }> = []; // Array para armazenar conversões
  displayedColumns: string[] = ['id', 'moedaOrigem', 'moedaDestino', 'valor', 'taxa', 'dataHora'];
  dataSource = new MatTableDataSource<any>([]); // Inicialização da propriedade dataSource


  realizarConversao(): void {
    // Validação para moedas iguais
    if (this.moedaOrigem === this.moedaDestino) {
      alert('As moedas de origem e destino devem ser diferentes.');
      return;
    }
  
    // Validação para valor inválido
    if (this.valor === null || this.valor <= 0) {
      alert('Por favor, insira um valor válido para conversão.');
      return;
    }
  
    // Garante que moedaOrigem e moedaDestino sejam strings
    const moedaOrigem = this.moedaOrigem || '';
    const moedaDestino = this.moedaDestino || '';
  
    // Cálculo do resultado
    this.resultado =
      moedaOrigem === 'Ouro Real' ? this.valor * this.taxaAtual : this.valor / this.taxaAtual;
  
    // Registro da conversão na memória
    const id = this.conversoes.length + 1; // Gera um ID sequencial
    const dataHora = new Date(); // Captura a data e hora atuais
    const conversao = {
      id,
      moedaOrigem, // Garantido como string
      moedaDestino, // Garantido como string
      valor: this.valor,
      taxa: this.taxaAtual,
      dataHora,
    };
  
    this.conversoes.push(conversao); // Adiciona à memória
    alert('Conversão realizada com sucesso!');
  }  
}
