import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConversaoMoedaComponent } from './conversao-moeda.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

describe('ConversaoMoedaComponent', () => {
  let component: ConversaoMoedaComponent;
  let fixture: ComponentFixture<ConversaoMoedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, MatCardModule],
      declarations: [ConversaoMoedaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversaoMoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve calcular a conversão corretamente', () => {
    component.moedaOrigem = 'Ouro Real';
    component.moedaDestino = 'Tibar';
    component.valorOrigem = 10;
    component.realizarConversao();
    expect(component.resultadoConversao).toBe('25'); // 10 * 2.5
  });
});
