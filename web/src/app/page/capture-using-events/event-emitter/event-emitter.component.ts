import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.scss'],
})
export class EventEmitterComponent implements OnInit {
  counter = 0;
  ngOnInit(): void {
    interval(20).subscribe(() => {
      this.counter++;
      parent.postMessage(this.getCanvasImage(), '*');
    });
  }

  getCanvasImage() {
    const quality = 0.85;
    const canvas: HTMLCanvasElement = document.getElementById(
      'canvas'
    ) as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const result = canvas.toDataURL('image/png', quality);
      return result;
    }
    return '';
  }
}
