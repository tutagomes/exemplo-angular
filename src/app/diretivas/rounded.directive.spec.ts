import { RoundedDirective } from './rounded.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

// Declarando um componente simples
@Component({
  template: `<div id='divDeTesteRoundedDirective' appRounded> Qualquer coisa </div>`
})
class TestRoundedDirectiveComponent {
}
describe('RoundedDirective', () => {
  let component: TestRoundedDirectiveComponent;
  let fixture: ComponentFixture<TestRoundedDirectiveComponent>;
  let divEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestRoundedDirectiveComponent, RoundedDirective]
    });
    fixture = TestBed.createComponent(TestRoundedDirectiveComponent);
    component = fixture.componentInstance;
    divEl = fixture.debugElement.query(By.css('#divDeTesteRoundedDirective'));
    console.log(divEl.nativeElement)
  });


  it('hovering over input', () => {
    let mouseLeave = new Event('mouseleave');

    divEl.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(divEl.nativeElement.style.backgroundColor).toBe('rgb(248, 248, 248)');

    divEl.nativeElement.dispatchEvent(mouseLeave);
    fixture.detectChanges();
    expect(divEl.nativeElement.style.backgroundColor).toBe('white');
  });
});
