import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransacoesComponent } from './transacoes.component';
import { TransacaoService } from '../../services/transacao.service';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

describe('TransacoesComponent', () => {
  let component: TransacoesComponent;
  let fixture: ComponentFixture<TransacoesComponent>;
  let transacaoService: TransacaoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, MatCardModule],
      declarations: [TransacoesComponent],
      providers: [TransacaoService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacoesComponent);
    component = fixture.componentInstance;
    transacaoService = TestBed.inject(TransacaoService);
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve registrar uma transação válida', () => {
    spyOn(transacaoService, 'adicionarTransacao');
    component.moedaOrigem = 'Ouro Real';
    component.moedaDestino = 'Tibar';
    component.valorOrigem = 100;
    component.registrarTransacao();
    expect(transacaoService.adicionarTransacao).toHaveBeenCalledWith(
      'Ouro Real',
      'Tibar',
      250
    );
  });
});
