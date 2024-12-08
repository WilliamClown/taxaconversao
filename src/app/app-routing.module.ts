import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransacoesComponent } from './components/transacoes/transacoes.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { ConsultaTaxaComponent } from './components/consulta-taxa/consulta-taxa.component';
import { ConversaoMoedaComponent } from './components/conversao-moeda/conversao-moeda.component';


const routes: Routes = [
  { path: 'consulta-taxa', component: ConsultaTaxaComponent },
  { path: 'conversao-moeda', component: ConversaoMoedaComponent },
  { path: 'transacoes', component: TransacoesComponent },
  { path: 'historico', component: HistoricoComponent },
  { path: '', redirectTo: '/consulta-taxa', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
