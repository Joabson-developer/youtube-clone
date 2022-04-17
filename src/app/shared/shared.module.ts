import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YtHeaderComponent } from './yt-header/yt-header.component';

@NgModule({
  declarations: [YtHeaderComponent],
  imports: [CommonModule],
  exports: [YtHeaderComponent],
})
export class SharedModule {}
