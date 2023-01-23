import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaptureIframeImageComponent } from './page/capture-iframe-image/capture-iframe-image.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
