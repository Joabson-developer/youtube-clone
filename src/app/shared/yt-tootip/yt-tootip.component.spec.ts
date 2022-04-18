import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtTootipComponent } from './yt-tootip.component';

describe('YtTootipComponent', () => {
  let component: YtTootipComponent;
  let fixture: ComponentFixture<YtTootipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YtTootipComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YtTootipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
