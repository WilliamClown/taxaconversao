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
  moedaOrigem: string = 'Ouro Real';
  moedaDestino: string = 'Tibar';
  valorOrigem: number | null = null;
  taxaAtual: number = 2.5; // Taxa inicial
  resultadoConversao: string | null = null; // Resultado da conversão
  conversoes: any[] = []; // Lista de conversões
  dataSource = new MatTableDataSource<any>(this.conversoes);

  displayedColumns: string[] = ['id', 'moedaOrigem', 'moedaDestino', 'valor', 'taxa', 'dataHora'];

  realizarConversao(): void {
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
        ? valor * this.taxaAtual
        : valor / this.taxaAtual;

    // Atualiza o resultado da conversão
    this.resultadoConversao = valorConvertido.toFixed(2);

    // Adiciona a conversão à lista
    const novaConversao = {
      id: this.conversoes.length + 1,
      moedaOrigem: this.moedaOrigem,
      moedaDestino: this.moedaDestino,
      valor: this.resultadoConversao,
      taxa: this.taxaAtual,
      dataHora: new Date(),
    };

    this.conversoes.push(novaConversao);
    this.dataSource.data = this.conversoes;

    this.valorOrigem = null; // Limpa o campo de entrada
  }
}