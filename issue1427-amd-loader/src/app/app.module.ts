import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ExamplePdfViewerComponent } from './example-pdf-viewer.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxExtendedPdfViewerModule],
  declarations: [AppComponent, ExamplePdfViewerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
