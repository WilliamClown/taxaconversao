import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atualizar-taxa-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, // Inclua MatCardModule
    MatButtonModule, // Inclua MatButtonModule
    MatFormFieldModule, // Inclua MatFormFieldModule
    MatInputModule, // Inclua MatInputModule
    FormsModule, // Para usar [(ngModel)]
  ],
  template: `
    <mat-card class="modal-card">
      <mat-card-header class="modal-card-header">
        Atualizar Taxa
      </mat-card-header>
      <mat-card-content class="modal-card-content">
        <mat-form-field appearance="fill" class="form-field">
          <mat-label>Nova Taxa</mat-label>
          <input matInput type="number" [(ngModel)]="novaTaxa" />
        </mat-form-field>
      </mat-card-content>
      <mat-card-actions class="modal-card-actions">
        <button mat-button (click)="fechar()">Cancelar</button>
        <button mat-raised-button color="primary" (click)="salvar()">Salvar</button>
      </mat-card-actions>
    </mat-card>
  `,
})
export class AtualizarTaxaModalComponent {
  novaTaxa: number = 0;

  fechar(): void {
    console.log('Fechando o modal');
  }

  salvar(): void {
    console.log('Salvando nova taxa:', this.novaTaxa);
  }
}
