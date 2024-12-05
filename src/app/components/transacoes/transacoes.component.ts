import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para suportar [(ngModel)]
import { CommonModule } from '@angular/common'; // Importa CommonModule para pipes básicos, caso necessário

@Component({
  selector: 'app-transacoes',
  standalone: true,
  imports: [CommonModule, FormsModule], // Inclui FormsModule
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.css'],
})
export class TransacoesComponent {
  valorEmOuro = 0;

  constructor() {}

  registrarTransacao() {
    console.log(`Registrando transação com ${this.valorEmOuro} Ouro Real`);
    this.valorEmOuro = 0; // Limpa o campo após registrar
  }
}
