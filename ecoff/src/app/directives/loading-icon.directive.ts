import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appLoadingIcon]',
})
export class LoadingIconDirective {
  private originalContent: string | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    if (!this.originalContent) {
      this.originalContent = this.el.nativeElement.innerHTML;
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', '<span class="spinner"></span>');
      this.renderer.addClass(this.el.nativeElement, 'disabled');

      setTimeout(() => {
        this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.originalContent);
        this.renderer.removeClass(this.el.nativeElement, 'disabled');
        this.originalContent = null;
      }, 2000); // Substitui por 2 segundos
    }
  }
}
