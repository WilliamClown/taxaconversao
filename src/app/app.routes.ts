import { Routes } from '@angular/router';
import { TransacoesComponent } from './components/transacoes/transacoes.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { ConsultaTaxaComponent } from './components/consulta-taxa/consulta-taxa.component';
import { ConversaoMoedaComponent } from './components/conversao-moeda/conversao-moeda.component';

export const routes: Routes = [
  { path: '', component: ConsultaTaxaComponent }, // Rota principal
  { path: 'consulta-taxa', component: ConsultaTaxaComponent },
  { path: 'conversao-moeda', component: ConversaoMoedaComponent },
  { path: 'transacoes', component: TransacoesComponent },
  { path: 'historico', component: HistoricoComponent },
  { path: '', redirectTo: '/consulta-taxa', pathMatch: 'full' },
];
