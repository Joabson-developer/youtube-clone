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

    // elementTarget.style.left = `${
    //   elementNative.offsetLeft +
    //   45 +
    // elementNative.clientWidth / 2 -
    // elementTarget.clientWidth / 2
    // }px`;

    this.updatePosition(elementTarget, elementNative);

    elementNative.addEventListener('mouseenter', (e: Event) => {
      this.updatePosition(elementTarget, elementNative);
      elementTarget.style.opacity = '1';
    });

    elementNative.addEventListener('mouseout', (e: Event) => {
      elementTarget.style.opacity = '0';
    });
  }

  private updatePosition(
    elementTarget: HTMLElement,
    elementNative: HTMLElement
  ) {
    elementTarget.style.inset = `${
      elementNative.offsetHeight + 30
    }px auto auto ${
      elementNative.offsetLeft +
      elementNative.clientWidth / 2 -
      elementTarget.clientWidth / 2
    }px`;
  }
}
