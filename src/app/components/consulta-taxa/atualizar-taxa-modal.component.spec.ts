import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtualizarTaxaModalComponent } from './atualizar-taxa-modal.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

describe('AtualizarTaxaModalComponent', () => {
  let component: AtualizarTaxaModalComponent;
  let fixture: ComponentFixture<AtualizarTaxaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, MatInputModule],
      declarations: [AtualizarTaxaModalComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarTaxaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve salvar a nova taxa', () => {
    component.novaTaxa = 3.5;
    spyOn(console, 'log');
    component.salvar();
    expect(console.log).toHaveBeenCalledWith('Salvando nova taxa:', 3.5);
  });

  it('deve exibir uma mensagem de erro se a taxa for inválida', () => {
    component.novaTaxa = -1; // Taxa inválida
    component.salvar();
    expect(component.mensagemErro).toBe('Por favor, insira uma taxa válida.');
  });
});
