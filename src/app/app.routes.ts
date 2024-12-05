import { Routes } from '@angular/router';
import { TransacoesComponent } from './components/transacoes/transacoes.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { PainelConversaoComponent } from './components/painel-conversao/painel-conversao.component';

export const routes: Routes = [
  { path: '', component: PainelConversaoComponent }, // Rota principal
  { path: 'painel-conversao', component: PainelConversaoComponent }, // Rota adicional para o painel, se necessário
  { path: 'transacoes', component: TransacoesComponent },
  { path: 'historico', component: HistoricoComponent },
  { path: '', redirectTo: '/painel-conversao', pathMatch: 'full' },
];
