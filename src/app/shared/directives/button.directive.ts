import { ComponentFactoryResolver, Directive, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BUTTON_TYPES } from 'src/assets/constants';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {
  @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.style.backgroundColor = '#c1c1c1'
  }
  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.backgroundColor = 'transparent'
  }


  constructor(private el: ElementRef<HTMLButtonElement>) {
    const style = el.nativeElement.style;
    style.width = '30px';
    style.height = '30px';
    style.display = 'flex';
    style.alignItems = 'center';
    style.justifyContent = 'center';
    style.borderRadius = '50%';
   }


}
