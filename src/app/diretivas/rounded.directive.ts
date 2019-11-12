import { Directive, OnInit, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appRounded]'
})
export class RoundedDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @Input() appRounded: string = '10px';
  ngOnInit () {
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', this.appRounded);
  }
  @HostListener('mouseenter') mouseOver (event: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#F8F8F8');
  }
  @HostListener('mouseleave') mouseLeave (event: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white');
  }
}
