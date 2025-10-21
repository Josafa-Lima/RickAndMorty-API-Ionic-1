import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[hightlight]',
  standalone: false
})
export class HighlightDirective {
  @HostBinding('style.background') transform = ''
  @HostBinding('style.transition') transition = 'all 0.5s'
  @HostListener('mouseover') onMouseOver()
  {
    this.transform = '#86C444'
  }
  @HostListener('mouseleave') onMouseLeave()
  {
    this.transform = ''
  }
}
