import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AtualizarTaxaModalComponent } from './atualizar-taxa-modal.component';

@Component({
  selector: 'app-consulta-taxa',
  standalone: true,
  imports: [
    MatDialogModule, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule,],
  templateUrl: './consulta-taxa.component.html',
  styleUrls: ['./consulta-taxa.component.css'],
})
export class ConsultaTaxaComponent {
  taxaAtual = 2.5;

  constructor(private dialog: MatDialog) {}

  abrirModalAtualizarTaxa(): void {
    const dialogRef = this.dialog.open(AtualizarTaxaModalComponent, {
      width: '400px',
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe((novaTaxa: number) => {
      if (novaTaxa !== undefined) {
        this.taxaAtual = novaTaxa; // Atualiza a taxa atual
        console.log('Taxa atualizada para:', this.taxaAtual);
      }
    });
  }
}