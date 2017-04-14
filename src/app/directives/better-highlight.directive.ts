import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding  } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: String = 'transparent';


  constructor(private elRef: ElementRef,  private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red' );

  }

  @HostListener('mouseenter') mouseOver(eventdata: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    this.backgroundColor = 'red';
  }

  @HostListener('mouseleave') mouseLeave(eventdata: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }

}
