import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yt-tootip',
  templateUrl: './tootip.component.html',
  styleUrls: ['./tootip.component.scss'],
})
export class TootipComponent implements OnInit {
  @Input() text: string = '';
  @Input() idTootip!: string;
  constructor() {}

  ngOnInit(): void {}
}
