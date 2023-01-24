import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaptureIframeImageComponent } from './page/capture-iframe-image/capture-iframe-image.component';
import { CaptureUsingEventsComponent } from './page/capture-using-events/capture-using-events.component';
import { EventEmitterComponent } from './page/capture-using-events/event-emitter/event-emitter.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'capture',
    component: CaptureIframeImageComponent,
  },
  {
    path: 'events',
    component: CaptureUsingEventsComponent,
  },
  {
    path: 'events/emitter',
    component: EventEmitterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
