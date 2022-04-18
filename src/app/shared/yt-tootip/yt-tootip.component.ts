import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yt-tootip',
  templateUrl: './yt-tootip.component.html',
  styleUrls: ['./yt-tootip.component.scss'],
})
export class YtTootipComponent implements OnInit {
  @Input() text: string = '';
  @Input() idTootip!: string;
  constructor() {}

  ngOnInit(): void {}
}
