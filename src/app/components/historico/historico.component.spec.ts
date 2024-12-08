import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoricoComponent } from './historico.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TransacaoService } from '../../services/transacao.service';

describe('HistoricoComponent', () => {
  let component: HistoricoComponent;
  let fixture: ComponentFixture<HistoricoComponent>;
  let transacaoService: TransacaoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTableModule, MatPaginatorModule],
      declarations: [HistoricoComponent],
      providers: [TransacaoService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoComponent);
    component = fixture.componentInstance;
    transacaoService = TestBed.inject(TransacaoService);
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar as transações do serviço', () => {
    const transacoes = [
      { id: 1, origem: 'Ouro Real', destino: 'Tibar', valor: 250, dataHora: new Date() },
    ];
    spyOn(transacaoService, 'obterTransacoes').and.returnValue(transacoes);
    component.atualizarDados();
    expect(component.dataSource.data).toEqual(transacoes);
  });
});
