import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtAsideComponent } from './yt-aside.component';

describe('YtAsideComponent', () => {
  let component: YtAsideComponent;
  let fixture: ComponentFixture<YtAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YtAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YtAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
