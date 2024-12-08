import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-atualizar-taxa-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './atualizar-taxa-modal.component.html',
  styleUrls: ['./atualizar-taxa-modal.component.css'],
})
export class AtualizarTaxaModalComponent {
  novaTaxa: number = 0;

  constructor(private dialogRef: MatDialogRef<AtualizarTaxaModalComponent>) {}

  fechar(): void {
    this.dialogRef.close(); // Fecha o modal sem enviar dados
  }

  salvar(): void {
    if (this.novaTaxa > 0) {
      this.dialogRef.close(this.novaTaxa); // Envia a nova taxa e fecha o modal
    } else {
      alert('Por favor, insira uma taxa válida.');
    }
  }
}
