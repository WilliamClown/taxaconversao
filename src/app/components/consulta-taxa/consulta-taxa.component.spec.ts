import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaTaxaComponent } from './consulta-taxa.component';
import { MatDialog } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ConsultaTaxaComponent', () => {
  let component: ConsultaTaxaComponent;
  let fixture: ComponentFixture<ConsultaTaxaComponent>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    const matDialogMock = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, ConsultaTaxaComponent],
      providers: [{ provide: MatDialog, useValue: matDialogMock }],
    }).compileComponents();

    dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    fixture = TestBed.createComponent(ConsultaTaxaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve abrir o modal ao clicar no botão', () => {
    component.abrirModalAtualizarTaxa();
    expect(dialogSpy.open).toHaveBeenCalled();
  });
});
