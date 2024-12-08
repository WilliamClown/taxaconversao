import { Component } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card'; 
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AtualizarTaxaModalComponent } from './atualizar-taxa-modal.component';
import { EstadoService } from '../../services/estado.service';

@Component({
  selector: 'app-consulta-taxa',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatCardModule, MatIconModule], 
  templateUrl: './consulta-taxa.component.html',
  styleUrls: ['./consulta-taxa.component.css'],
})
export class ConsultaTaxaComponent {
  taxaAtual: number;

  constructor(private dialog: MatDialog, private estadoService: EstadoService) {
    this.taxaAtual = this.estadoService.obterTaxaAtual();
  }

  abrirModalAtualizarTaxa(): void {
    const dialogRef = this.dialog.open(AtualizarTaxaModalComponent, {
      width: '400px',
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe((novaTaxa: number) => {
      if (novaTaxa !== undefined) {
        this.estadoService.atualizarTaxa(novaTaxa); // Atualiza no serviço
        this.taxaAtual = this.estadoService.obterTaxaAtual(); // Atualiza no componente
      }
    });
  }
}