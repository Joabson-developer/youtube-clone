import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YtHeaderComponent } from './yt-header/yt-header.component';
import { MatIconModule } from '@angular/material/icon';
import { TootipComponent } from './tootip/tootip.component';
import { TooltipTargetDirective } from '../directives/tooltip-target/tooltip-target.directive';

@NgModule({
  declarations: [YtHeaderComponent, TootipComponent, TooltipTargetDirective],
  imports: [CommonModule, MatIconModule],
  exports: [YtHeaderComponent, TootipComponent],
})
export class SharedModule {}
