import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomTooltip]',
})
export class CustomTooltipDirective {
  @Input('appCustomTooltip') tooltipText: string = ''; // Mensagem do tooltip
  private tooltipElement: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltipText) return;
  
    // Criação do elemento tooltip
    if (!this.tooltipElement) {
      this.tooltipElement = this.renderer.createElement('span');
      this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
      this.renderer.setStyle(this.tooltipElement, 'background', '#f9cf01');
      this.renderer.setStyle(this.tooltipElement, 'color', '#5a5a5a');
      this.renderer.setStyle(this.tooltipElement, 'padding', '5px 10px');
      this.renderer.setStyle(this.tooltipElement, 'border-radius', '5px');
      this.renderer.setStyle(this.tooltipElement, 'font-size', '12px');
      this.renderer.setStyle(this.tooltipElement, 'z-index', '1000');
      this.renderer.setStyle(this.tooltipElement, 'white-space', 'nowrap');
      this.renderer.setStyle(this.tooltipElement, 'pointer-events', 'none');
      this.renderer.setStyle(this.tooltipElement, 'box-shadow', '0 2px 4px rgba(0, 0, 0, 0.2)');
  
      this.renderer.appendChild(document.body, this.tooltipElement);
    }
  
    // Garante que tooltipElement não é null
    if (this.tooltipElement) {
      this.tooltipElement.innerText = this.tooltipText;
  
      const hostPos = this.el.nativeElement.getBoundingClientRect();
      const tooltipPos = this.tooltipElement.getBoundingClientRect();
  
      const top = hostPos.top - tooltipPos.height - 10; // Acima do elemento
      const left = hostPos.left + hostPos.width / 2 - tooltipPos.width / 2; // Centralizado
  
      this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
      this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
    }
  }
  

  @HostListener('mouseleave') onMouseLeave() {
    this.removeTooltip();
  }

  @HostListener('click') onClick() {
    this.removeTooltip(); // Remove o tooltip ao clicar no elemento
  }

  private removeTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}
