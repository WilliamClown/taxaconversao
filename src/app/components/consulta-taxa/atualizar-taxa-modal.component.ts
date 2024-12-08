import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atualizar-taxa-modal',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  template: `
    <h1 mat-dialog-title>Atualizar Taxa</h1>
    <div mat-dialog-content>
      <p>Informe a nova taxa de conversão (Ouro Real para Tibar):</p>
      <mat-form-field appearance="fill">
        <mat-label>Nova Taxa</mat-label>
        <input matInput type="number" [(ngModel)]="novaTaxa" />
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="cancelar()">Cancelar</button>
      <button mat-raised-button color="primary" (click)="confirmar()">Atualizar</button>
    </div>
  `,
  styleUrls: ['./atualizar-taxa-modal.component.css'], // Confirme se este arquivo existe no mesmo diretório
})
export class AtualizarTaxaModalComponent {
  novaTaxa: number | null = null;

  constructor(private dialogRef: MatDialogRef<AtualizarTaxaModalComponent>) {}

  cancelar(): void {
    this.dialogRef.close(null); // Fecha sem atualizar
  }

  confirmar(): void {
    if (this.novaTaxa && this.novaTaxa > 0) {
      this.dialogRef.close(this.novaTaxa); // Retorna a nova taxa
    } else {
      alert('Por favor, insira uma taxa válida maior que zero.');
    }
  }
}
