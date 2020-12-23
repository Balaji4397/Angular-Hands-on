import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appMydir]'
})
export class MydirDirective {

  constructor(private el: ElementRef) { }

  @Input('appMydir') hcolor: string;
 
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.hcolor);
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight2(null);
  }
 
  private highlight(hcolor: string) {
    if (hcolor == '24px') 
    {
      Object.assign(this.el.nativeElement.style, {
        fontSize: hcolor,
      });
    }
     else if (hcolor == 'green') {
      Object.assign(this.el.nativeElement.style, {
        color: hcolor,
      
      });
    } else {
      Object.assign(this.el.nativeElement.style, {
         backgroundColor: hcolor,
       
      });
    }
  }
  private highlight2(hcolor: string) {
    Object.assign(this.el.nativeElement.style, {
      fontSize: hcolor,
      backgroundColor: hcolor,
      color: hcolor,
    });
  }  

}
