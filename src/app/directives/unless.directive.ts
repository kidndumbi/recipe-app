import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  constructor(private elRef: ElementRef,  private renderer: Renderer2) { }

  @HostListener('click') mouseClick(eventdata: Event) {
     this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    // this.backgroundColor = this.over;
  }

}
