import { flatten } from '@angular/compiler';
import { Directive,ElementRef,Input, HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonChange]'
})
export class ButtonChangeDirective {
  @Input() correctAnswer : boolean = false;
  constructor(private el: ElementRef,private render : Renderer2) { }

  @HostListener('click') clickAnswer() {

    if(this.correctAnswer){
      this.render.addClass(this.el.nativeElement,'btn-outline-success');
      this.correctAnswer =false;
    }else{
      this.render.addClass(this.el.nativeElement,'btn-outline-danger');
    }
    
  }
}
