import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewerPageComponent } from './viewer/viewer-page/viewer-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/viewer', pathMatch: 'full' },
  { path: 'viewer', component: ViewerPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
