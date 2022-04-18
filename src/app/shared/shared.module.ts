import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YtHeaderComponent } from './yt-header/yt-header.component';
import { MatIconModule } from '@angular/material/icon';
import { TootipComponent } from './tootip/tootip.component';

@NgModule({
  declarations: [YtHeaderComponent, TootipComponent],
  imports: [CommonModule, MatIconModule],
  exports: [YtHeaderComponent],
})
export class SharedModule {}
