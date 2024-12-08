import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
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

  ngOnInit(): void {
    // Dados mockados
    this.dadosOriginais = [
      { id: 1, origem: 'Ouro Real', destino: 'Tibar', valor: 250, dataHora: new Date() },
      { id: 2, origem: 'Tibar', destino: 'Ouro Real', valor: 100, dataHora: new Date() },
    ];

    this.dataSource.data = this.dadosOriginais; // Atribui os dados mockados
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
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

  abrirDetalhes(row: any): void {
    alert(`Detalhes da Transação:\n${JSON.stringify(row, null, 2)}`);
  }
}
