import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appRounded]'
})
export class RoundedDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @Input() appRounded: string = '10px';
  ngOnInit () {
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', this.appRounded);
  }

}
