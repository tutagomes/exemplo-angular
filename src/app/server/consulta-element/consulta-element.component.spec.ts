import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaElementComponent } from './consulta-element.component';
import { Consulta } from '../consulta'
describe('ConsultaElementComponent', () => {
  let component: ConsultaElementComponent;
  let fixture: ComponentFixture<ConsultaElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should receive props and bind them, emiting', (done) => {
      let consulta = new Consulta(0, true, 'teste');
      let index = 0;
      component.consulta = consulta;
      component.index = index;
      component.deleteConsulta.subscribe((resposta) => {
        expect(resposta.index).toBe(index)
        done()
      })
      component.onDeleteConsulta(index);
      fixture.detectChanges();
  })
});
