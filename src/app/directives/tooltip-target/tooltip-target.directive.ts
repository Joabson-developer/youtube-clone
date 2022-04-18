import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[tooltip-target]',
})
export class TooltipTargetDirective {
  @Input('tooltip-target') public target!: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const elementNative = this.elementRef.nativeElement;

    const elementTarget = <HTMLElement>(
      document.getElementById(`${this.target}`)
    );

    elementTarget.style.left = `${
      elementNative.offsetLeft +
      45 +
      elementNative.clientWidth / 2 -
      elementTarget.clientWidth / 2
    }px`;
    elementTarget.style.top = `${elementNative.offsetHeight + 30}px`;

    elementNative.addEventListener('mouseenter', (e: Event) => {
      e.stopPropagation();
      elementTarget.style.opacity = '1';
    });

    elementNative.addEventListener('mouseout', (e: Event) => {
      e.stopPropagation();
      elementTarget.style.opacity = '0';
    });
  }
}
