import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs';

@Component({
  selector: 'app-capture-iframe-image',
  templateUrl: './capture-iframe-image.component.html',
  styleUrls: ['./capture-iframe-image.component.scss'],
})
export class CaptureIframeImageComponent implements OnInit {
  @ViewChild('screen1', { static: true }) screen1: any;
  @ViewChild('screen2', { static: true }) screen2: any;

  public capturedImage: string | undefined = undefined;

  constructor(private captureService: NgxCaptureService) {}

  ngOnInit(): void {}

  getBase64Image() {
    if (this.capturedImage) {
      return this.capturedImage;
    }
    return 'assets/no-image.png';
  }
  captureOtherDomain() {
    this.capture(this.screen1);
  }

  captureSameDomain() {
    this.capture(this.screen2);
  }

  capture(element: ElementRef) {
    this.captureService
      .getImage(element.nativeElement, true)
      .pipe(
        tap((img) => {
          console.log('Iframe captured');
          this.capturedImage = img;
        })
      )
      .subscribe();
  }
}
