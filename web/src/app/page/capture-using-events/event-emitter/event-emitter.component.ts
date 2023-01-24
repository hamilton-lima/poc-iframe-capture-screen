import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.scss'],
})
export class EventEmitterComponent implements OnInit {
  constructor() {}
  counter = 1;
  ngOnInit(): void {
    interval(20).subscribe(() => {
      parent.postMessage(this.counter++, '*');
    });
  }
}
