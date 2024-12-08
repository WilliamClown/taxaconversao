import { Component } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card'; 
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AtualizarTaxaModalComponent } from './atualizar-taxa-modal.component';

@Component({
  selector: 'app-consulta-taxa',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatCardModule, MatIconModule], 
  templateUrl: './consulta-taxa.component.html',
  styleUrls: ['./consulta-taxa.component.css'],
})
export class ConsultaTaxaComponent {
  taxaAtual: number = 2.5; // Taxa inicial

  constructor(private dialog: MatDialog) {}

  abrirModalAtualizarTaxa(): void {
    const dialogRef = this.dialog.open(AtualizarTaxaModalComponent, {
      width: '400px',
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe((novaTaxa: number) => {
      if (novaTaxa !== undefined) {
        this.taxaAtual = novaTaxa; // Atualiza a taxa atual
      }
    });
  }
}
