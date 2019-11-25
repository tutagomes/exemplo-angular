import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasComponent } from './tarefas.component';
import { TarefasService } from '../services/tarefas.service';
import { TarefaCardComponent } from './tarefa-card/tarefa-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

describe('TarefasComponent', () => {
  let component: TarefasComponent;
  let fixture: ComponentFixture<TarefasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefasComponent, TarefaCardComponent ],
      providers: [TarefasService],
      imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(
          [
            { path: "", component: TarefasComponent}
          ]
        )
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
