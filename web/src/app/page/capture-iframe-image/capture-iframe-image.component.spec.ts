import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureIframeImageComponent } from './capture-iframe-image.component';

describe('CaptureIframeImageComponent', () => {
  let component: CaptureIframeImageComponent;
  let fixture: ComponentFixture<CaptureIframeImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptureIframeImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptureIframeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
