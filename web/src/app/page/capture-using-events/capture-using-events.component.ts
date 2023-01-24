import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capture-using-events',
  templateUrl: './capture-using-events.component.html',
  styleUrls: ['./capture-using-events.component.scss'],
})
export class CaptureUsingEventsComponent implements OnInit {
  data = 'N/A';
  origin = 'N/A';
  public capturedImage: string | undefined = undefined;

  constructor() {}

  getBase64Image() {
    if (this.capturedImage) {
      return this.capturedImage;
    }
    return 'assets/no-image.png';
  }

  ngOnInit(): void {
    window.addEventListener(
      'message',
      (event) => {
        this.capturedImage = event.data;
        this.origin = event.origin;
      },
      false
    );
  }
}
