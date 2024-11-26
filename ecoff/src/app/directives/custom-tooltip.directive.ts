import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomTooltip]',
})
export class CustomTooltipDirective {
  @Input('appCustomTooltip') tooltipText: string = ''; // Mensagem do tooltip
  private tooltipElement: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltipText) return; // Se não houver texto, não exibe o tooltip

    this.tooltipElement = this.renderer.createElement('span');
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'background', '#f9cf01');
    this.renderer.setStyle(this.tooltipElement, 'color', '#5a5a5a');
    this.renderer.setStyle(this.tooltipElement, 'padding', '5px 10px');
    this.renderer.setStyle(this.tooltipElement, 'border-radius', '5px');
    this.renderer.setStyle(this.tooltipElement, 'font-size', '12px');
    this.renderer.setStyle(this.tooltipElement, 'top', `${this.el.nativeElement.offsetTop - 30}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${this.el.nativeElement.offsetLeft}px`);
    this.renderer.setStyle(this.tooltipElement, 'z-index', '1000');
    this.renderer.setStyle(this.tooltipElement, 'white-space', 'nowrap');
    this.renderer.setStyle(this.tooltipElement, 'pointer-events', 'none');

    if (this.tooltipElement) {
      this.tooltipElement.innerText = this.tooltipText;
      this.renderer.appendChild(document.body, this.tooltipElement);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}
