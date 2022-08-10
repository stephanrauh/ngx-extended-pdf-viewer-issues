import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-example-pdf-viewer',
  templateUrl: './example-pdf-viewer.component.html',
  styleUrls: ['./example-pdf-viewer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplePdfViewerComponent {

  constructor(private pdfService: NgxExtendedPdfViewerService) {
    // TODO the PDF viewer should work without the next line - it's merely a workaround:
    pdfDefaultOptions.cMapUrl= () => `/assets/cmaps/`;

  }
}
