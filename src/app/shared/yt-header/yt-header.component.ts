import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yt-header',
  templateUrl: './yt-header.component.html',
  styleUrls: ['./yt-header.component.scss'],
})
export class YtHeaderComponent implements OnInit {
  public hasFocus: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  public toggleFocus(): void {
    this.hasFocus = !this.hasFocus;
  }
}
