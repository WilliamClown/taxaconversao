import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransacaoService } from '../../services/transacao.service';

@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule para habilitar o DatePipe
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css'],
})
export class HistoricoComponent {
  historicoTransacoes: { date: Date; valorEmOuro: number; valorEmTibar: number }[] = [];

  constructor(private transacaoService: TransacaoService) {}

  ngOnInit() {
    this.historicoTransacoes = this.transacaoService.obterTransacoes();
  }
}
