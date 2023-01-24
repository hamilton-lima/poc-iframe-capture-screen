import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capture-using-events',
  templateUrl: './capture-using-events.component.html',
  styleUrls: ['./capture-using-events.component.scss'],
})
export class CaptureUsingEventsComponent implements OnInit {
  data = 'N/A';
  origin = 'N/A';

  constructor() {}

  ngOnInit(): void {
    window.addEventListener(
      'message',
      (event) => {
        this.data = event.data;
        this.origin = event.origin;
      },
      false
    );
  }
}
