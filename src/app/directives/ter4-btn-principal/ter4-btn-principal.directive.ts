import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTer4BtnPrincipal]'
})
export class Ter4BtnPrincipalDirective {

  constructor(public el: ElementRef) {
     //el.nativeElement.style.backgroundColor = 'yellow';
  }
  
  @HostListener('onclick') onMouseEnter() {
    this.el.nativeElement.style = "border: 2px; border-color:white";
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style = null;
  }
  
}
