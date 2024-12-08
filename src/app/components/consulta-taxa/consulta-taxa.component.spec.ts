import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaTaxaComponent } from './consulta-taxa.component';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

describe('ConsultaTaxaComponent', () => {
  let component: ConsultaTaxaComponent;
  let fixture: ComponentFixture<ConsultaTaxaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [ConsultaTaxaComponent],
      providers: [
        { provide: MatDialog, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaTaxaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve abrir o modal de atualização de taxa', () => {
    spyOn(component, 'abrirModalAtualizarTaxa');
    component.abrirModalAtualizarTaxa();
    expect(component.abrirModalAtualizarTaxa).toHaveBeenCalled();
  });
});
