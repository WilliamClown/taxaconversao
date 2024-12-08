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
import { EstadoService } from '../../services/estado.service';

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
  taxaAtual: number;
  resultadoConversao: string | null = null;
  conversoes: any[];
  dataSource: MatTableDataSource<any>;

  // Adicione esta propriedade com os nomes das colunas
  displayedColumns: string[] = ['id', 'moedaOrigem', 'moedaDestino', 'valor', 'taxa', 'dataHora'];

  constructor(private estadoService: EstadoService) {
    this.taxaAtual = this.estadoService.obterTaxaAtual();
    this.conversoes = this.estadoService.obterConversoes();
    this.dataSource = new MatTableDataSource(this.conversoes);
  }

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

    this.resultadoConversao = `${valor.toFixed(2)} ${this.moedaOrigem} = ${valorConvertido.toFixed(2)} ${this.moedaDestino} (Taxa: ${this.taxaAtual})`;

    const novaConversao = {
      id: this.conversoes.length + 1,
      moedaOrigem: this.moedaOrigem,
      moedaDestino: this.moedaDestino,
      valor: valorConvertido.toFixed(2),
      taxa: this.taxaAtual,
      dataHora: new Date(),
    };

    this.estadoService.adicionarConversao(novaConversao);
    this.dataSource.data = this.estadoService.obterConversoes();
    this.valorOrigem = null;
  }
}