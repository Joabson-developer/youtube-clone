import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtHeaderComponent } from './yt-header.component';

describe('YtHeaderComponent', () => {
  let component: YtHeaderComponent;
  let fixture: ComponentFixture<YtHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YtHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YtHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
