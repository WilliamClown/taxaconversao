import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TransacaoService } from '../../services/transacao.service';
import { MatDialog } from '@angular/material/dialog';
import { HistoricoDetalhesModalComponent } from './historico-detalhes-modal.component';

@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css'],
})
export class HistoricoComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'origem', 'destino', 'valor', 'data'];
  transacoesFiltradas = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private transacaoService: TransacaoService, private dialog: MatDialog) {}

  ngOnInit(): void {
    const transacoes = this.transacaoService.obterTransacoes();
    this.transacoesFiltradas.data = transacoes;
  }

  ngAfterViewInit(): void {
    this.transacoesFiltradas.paginator = this.paginator;
  }

  abrirDetalhes(transacao: any): void {
    this.dialog.open(HistoricoDetalhesModalComponent, {
      width: '400px',
      data: transacao,
    });
  }

  exportarCSV(): void {
    const dadosCSV = this.transacoesFiltradas.data
      .map(transacao =>
        `${transacao.id},${transacao.origem},${transacao.destino},${transacao.valor},${transacao.data}`
      )
      .join('\n');
    const blob = new Blob([dadosCSV], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'transacoes.csv');
    link.click();
  }
}
