import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptureIframeImageComponent } from './page/capture-iframe-image/capture-iframe-image.component';
import { HomeComponent } from './page/home/home.component';
import { CaptureUsingEventsComponent } from './page/capture-using-events/capture-using-events.component';
import { EventEmitterComponent } from './page/capture-using-events/event-emitter/event-emitter.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptureIframeImageComponent,
    HomeComponent,
    CaptureUsingEventsComponent,
    EventEmitterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
