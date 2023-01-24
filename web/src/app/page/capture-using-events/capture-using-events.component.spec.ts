import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureUsingEventsComponent } from './capture-using-events.component';

describe('CaptureUsingEventsComponent', () => {
  let component: CaptureUsingEventsComponent;
  let fixture: ComponentFixture<CaptureUsingEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptureUsingEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptureUsingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
