import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversaoMoedaComponent } from './conversao-moeda.component';

describe('ConversaoMoedaComponent', () => {
  let component: ConversaoMoedaComponent;
  let fixture: ComponentFixture<ConversaoMoedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversaoMoedaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversaoMoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
