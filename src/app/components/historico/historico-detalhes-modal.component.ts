import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historico-detalhes-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="modal-title">Detalhes</h1>
    <div class="modal-content">
      <p><strong>ID:</strong> {{ data.id }}</p>
      <p><strong>Tipo:</strong> {{ data.tipo }}</p>
      <p><strong>Valor:</strong> {{ data.valor }}</p>
      <p><strong>Data e Hora:</strong> {{ data.dataHora | date: 'short' }}</p>
    </div>
    <div class="modal-actions">
      <button mat-button (click)="fechar()">Fechar</button>
    </div>
  `,
})
export class HistoricoDetalhesModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<HistoricoDetalhesModalComponent>
  ) {}

  fechar() {
    this.dialogRef.close();
  }
}
