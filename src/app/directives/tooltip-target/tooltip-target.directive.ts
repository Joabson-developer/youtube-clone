import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[tooltip-target]',
})
export class TooltipTargetDirective {
  @Input('tooltip-target') public target!: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const elementTarget = <HTMLElement>(
      document.getElementById(`${this.target}`)
    );
    const elementNative = this.elementRef.nativeElement;

    elementTarget.style.left = `${elementNative.offsetLeft + 30}px`;
    elementTarget.style.top = `${elementNative.offsetHeight + 30}px`;

    elementNative.addEventListener('mouseenter', (e: Event) => {
      e.stopPropagation();
      elementTarget.style.display = 'block';
    });

    elementNative.addEventListener('mouseout', (e: Event) => {
      e.stopPropagation();
      elementTarget.style.display = 'none';
    });
  }
}
