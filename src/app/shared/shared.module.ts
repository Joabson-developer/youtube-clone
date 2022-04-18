import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MatIconModule } from '@angular/material/icon';

// Directives
import { TooltipTargetDirective } from '../directives/tooltip-target/tooltip-target.directive';

// Components
import { YtHeaderComponent } from './yt-header/yt-header.component';
import { YtTootipComponent } from './yt-tootip/yt-tootip.component';
import { YtAsideComponent } from './yt-aside/yt-aside.component';

@NgModule({
  declarations: [
    TooltipTargetDirective,
    YtHeaderComponent,
    YtTootipComponent,
    YtAsideComponent,
  ],
  imports: [CommonModule, MatIconModule],
  exports: [YtHeaderComponent, YtTootipComponent, YtAsideComponent],
})
export class SharedModule {}
