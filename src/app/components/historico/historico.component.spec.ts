import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoricoComponent } from './historico.component';
import { TransacaoService } from '../../services/transacao.service';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { HistoricoDetalhesModalComponent } from './historico-detalhes-modal.component';

describe('HistoricoComponent', () => {
  let component: HistoricoComponent;
  let fixture: ComponentFixture<HistoricoComponent>;
  let transacaoService: jasmine.SpyObj<TransacaoService>;
  let matDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    const transacaoServiceSpy = jasmine.createSpyObj('TransacaoService', ['obterTransacoes']);
    const matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      imports: [HistoricoComponent],
      providers: [
        { provide: TransacaoService, useValue: transacaoServiceSpy },
        { provide: MatDialog, useValue: matDialogSpy },
      ],
    }).compileComponents();

    transacaoService = TestBed.inject(TransacaoService) as jasmine.SpyObj<TransacaoService>;
    matDialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoComponent);
    component = fixture.componentInstance;
    transacaoService.obterTransacoes.and.returnValue([
      { id: 1, origem: 'Ouro Real', destino: 'Tibar', valor: 100, data: new Date() },
    ]);
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar as transações ao iniciar', () => {
    expect(component.transacoesFiltradas.data.length).toBe(1);
  });

  it('deve abrir o modal de detalhes ao clicar em uma transação', () => {
    const transacao = { id: 1, origem: 'Ouro Real', destino: 'Tibar', valor: 100, data: new Date() };
    component.abrirDetalhes(transacao);
    expect(matDialog.open).toHaveBeenCalledWith(HistoricoDetalhesModalComponent, {
      width: '400px',
      data: transacao,
    });
  });

  it('deve exportar as transações para CSV', () => {
    spyOn(document, 'createElement').and.callThrough();
    component.exportarCSV();
    expect(document.createElement).toHaveBeenCalledWith('a');
  });
});
