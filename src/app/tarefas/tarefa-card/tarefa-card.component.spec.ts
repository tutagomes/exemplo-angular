import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaCardComponent } from './tarefa-card.component';

describe('TarefaCardComponent', () => {
  let component: TarefaCardComponent;
  let fixture: ComponentFixture<TarefaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
