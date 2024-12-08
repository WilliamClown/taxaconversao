import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card'; // Para um visual moderno

@Component({
  selector: 'app-historico-detalhes-modal',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatCardModule],
  template: `
    <mat-card class="modal-card mat-elevation-z4">
      <mat-card-header>
        <mat-card-title>Detalhes da Transação</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p><strong>ID:</strong> {{ data.id }}</p>
        <p><strong>Moeda Origem:</strong> {{ data.origem }}</p>
        <p><strong>Moeda Destino:</strong> {{ data.destino }}</p>
        <p><strong>Valor:</strong> {{ data.valor | number: '1.2-2' }}</p>
        <p><strong>Data:</strong> {{ data.data | date: 'short' }}</p>
      </mat-card-content>
      <mat-card-actions align="end">
        <button mat-button color="primary" (click)="fechar()">Fechar</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      .modal-card {
        max-width: 500px;
        margin: auto;
        padding: 16px;
      }

      mat-card-header {
        text-align: center;
        background-color: #e3f2fd; /* Azul claro */
        color: #333;
      }

      mat-card-content p {
        margin: 8px 0;
        font-size: 14px;
      }

      mat-card-actions {
        display: flex;
        justify-content: flex-end;
      }
    `,
  ],
})
export class HistoricoDetalhesModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<HistoricoDetalhesModalComponent>
  ) {}

  fechar(): void {
    this.dialogRef.close();
  }
}
