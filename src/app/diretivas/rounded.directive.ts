import { Directive, OnInit, ElementRef, Renderer2, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appRounded]'
})
export class RoundedDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() appRounded: string = '10px';
  ngOnInit () {
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', this.appRounded);
  }
  @HostListener('mouseenter') mouseOver (event: Event) {
    this.backgroundColor = "#F8F8F8";
  }
  @HostListener('mouseleave') mouseLeave (event: Event) {
    this.backgroundColor = "white";
  }
}
