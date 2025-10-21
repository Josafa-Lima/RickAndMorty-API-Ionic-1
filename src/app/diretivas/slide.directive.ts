import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[slide]',
  standalone: false
})
export class SlideDirective {
@HostBinding('style.transform') transform = ''
@HostBinding('style.transition') transition = 'all 0.5s'
@HostListener('mouseover') onMouseOver()
{
  this.transform = 'translateY(-10px)'
}
@HostListener('mouseleave') onMouseLeave()
{
  this.transform = ''
}










  constructor() { }

}
