import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-atualizar-taxa-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './atualizar-taxa-modal.component.html',
  styleUrls: ['./atualizar-taxa-modal.component.css'],
})
export class AtualizarTaxaModalComponent {
  novaTaxa: number = 0;
  mensagemErro: string | null = null; // Mensagem de erro para exibição

  constructor(private dialogRef: MatDialogRef<AtualizarTaxaModalComponent>) {}

  fechar(): void {
    this.dialogRef.close(); // Fecha o modal sem salvar
  }

  salvar(): void {
    if (this.novaTaxa > 0) {
      this.dialogRef.close(this.novaTaxa); // Envia a nova taxa ao componente pai
    } else {
      this.mensagemErro = 'Por favor, insira uma taxa válida.'; // Define a mensagem de erro
    }
  }
}