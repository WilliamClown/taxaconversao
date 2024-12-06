import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelConversaoComponent } from './components/painel-conversao/painel-conversao.component';
import { TransacoesComponent } from './components/transacoes/transacoes.component';
import { HistoricoComponent } from './components/historico/historico.component';

const routes: Routes = [
  { path: 'painel-conversao', component: PainelConversaoComponent },
  { path: 'transacoes', component: TransacoesComponent },
  { path: 'historico', component: HistoricoComponent },
  { path: '', redirectTo: '/painel-conversao', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
