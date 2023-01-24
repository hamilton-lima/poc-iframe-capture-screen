import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bouncing-ball',
  template: ` <canvas #canvas width="200" height="200"></canvas> `,
})
export class BouncingBallComponent {
  @ViewChild('canvas') canvas: ElementRef | undefined;
  private context: CanvasRenderingContext2D | null;
  private ballX = 50;
  private ballY = 50;
  private ballRadius = 10;
  private xSpeed = 5;
  private ySpeed = 5;

  constructor() {
    this.context = null;
  }

  ngAfterViewInit() {
    if (this.canvas) {
      this.context = (
        this.canvas.nativeElement as HTMLCanvasElement
      ).getContext('2d');
      this.animate();
    }
  }

  animate() {
    if (this.context) {
      requestAnimationFrame(() => this.animate());
      this.context.clearRect(0, 0, 400, 400);
      this.context.beginPath();
      this.context.arc(this.ballX, this.ballY, this.ballRadius, 0, Math.PI * 2);
      this.context.fillStyle = 'red';
      this.context.fill();
      this.context.closePath();
      this.ballX += this.xSpeed;
      this.ballY += this.ySpeed;
      if (
        this.ballX + this.xSpeed > 400 - this.ballRadius ||
        this.ballX + this.xSpeed < this.ballRadius
      ) {
        this.xSpeed = -this.xSpeed;
      }
      if (
        this.ballY + this.ySpeed > 400 - this.ballRadius ||
        this.ballY + this.ySpeed < this.ballRadius
      ) {
        this.ySpeed = -this.ySpeed;
      }
    }
  }
}
