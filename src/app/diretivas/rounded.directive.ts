import { Directive, OnInit, ElementRef, Renderer2, Input, HostListener, HostBinding, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appRounded]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class RoundedDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  @HostBinding('style.background-color') backgroundColor: string;
  @HostBinding('style.border-radius') borderRadius: string;

  @Input() appRounded: string = '10px';
  ngOnInit () {
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', this.appRounded);
  }

  onMouseEnter (event: Event) {
    this.backgroundColor = '#F8F8F8';
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#F8F8F8');
  }
  onMouseLeave (event: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white');

  }
}
