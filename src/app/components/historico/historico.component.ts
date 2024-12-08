import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HistoricoDetalhesModalComponent } from './historico-detalhes-modal.component'; 
import { TransacaoService } from '../../services/transacao.service';



@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule, 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule, 
  ],
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css'],
})
export class HistoricoComponent {
  displayedColumns: string[] = ['id', 'origem', 'destino', 'valor', 'dataHora'];
  dataSource = new MatTableDataSource<any>([]);
  dadosOriginais: any[] = []; // Para preservar os dados originais
  filtroMoedaOrigem: string = '';
  filtroMoedaDestino: string = '';
  filtroData: Date | null = null;
  filtroValorMinimo: number | null = null;
  filtroValorMaximo: number | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private transacaoService: TransacaoService, private dialog: MatDialog) {}


  ngOnInit(): void {
    this.atualizarDados();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  atualizarDados(): void {
    this.dataSource.data = this.transacaoService.obterTransacoes();
    console.log('Dados atualizados no histórico:', this.dataSource.data);
  }

  aplicarFiltros(): void {
    // Filtra os dados com base nos critérios
    const dadosFiltrados = this.dadosOriginais.filter((transacao: any) => {
      const atendeMoedaOrigem =
        !this.filtroMoedaOrigem || transacao.origem === this.filtroMoedaOrigem;
      const atendeMoedaDestino =
        !this.filtroMoedaDestino || transacao.destino === this.filtroMoedaDestino;
      const atendeData =
        !this.filtroData ||
        new Date(transacao.dataHora).toDateString() === this.filtroData.toDateString();
      const atendeValorMinimo =
        this.filtroValorMinimo === null || transacao.valor >= this.filtroValorMinimo;
      const atendeValorMaximo =
        this.filtroValorMaximo === null || transacao.valor <= this.filtroValorMaximo;

      return (
        atendeMoedaOrigem &&
        atendeMoedaDestino &&
        atendeData &&
        atendeValorMinimo &&
        atendeValorMaximo
      );
    });

    // Atualiza o DataSource com os dados filtrados
    this.dataSource.data = dadosFiltrados;

    // Reseta o paginador para a primeira página após aplicar os filtros
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  abrirDetalhes(transacao: any): void {
    this.dialog.open(HistoricoDetalhesModalComponent, {
      width: '400px',
      data: transacao, // Passa os dados da transação para o modal
    });
  }

  exportarCSV(): void {
    const colunas = ['ID', 'Moeda Origem', 'Moeda Destino', 'Valor', 'Data e Hora'];
  
    // Converte os dados para formato CSV
    const linhas = this.dataSource.data.map((transacao: any) => [
      transacao.id,
      transacao.origem,
      transacao.destino,
      transacao.valor,
      new Date(transacao.dataHora).toLocaleString(), // Formata a data
    ]);
  
    // Adiciona o cabeçalho das colunas
    const dadosCSV = [colunas, ...linhas]
      .map((linha) => linha.join(',')) // Junta os valores com vírgulas
      .join('\n'); // Junta as linhas com quebras de linha
  
    // Cria um blob para o CSV e faz o download
    const blob = new Blob([dadosCSV], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'historico-transacoes.csv');
    link.click();
  }
}
