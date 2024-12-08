import { CommonModule } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-historico-detalhes-modal',
  templateUrl: './historico-detalhes-modal.component.html',
  encapsulation: ViewEncapsulation.None, // Permite aplicar estilos globais
  imports: [
    CommonModule,
    MatCardModule, 
    MatButtonModule, 
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
