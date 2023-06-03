import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-viewer-page',
  templateUrl: './viewer-page.component.html',
  styleUrls: ['./viewer-page.component.scss'],
})
export class ViewerPageComponent {
  public pdfUrl: string;

  public showPrimaryPdf = false;
  public showSecondaryPdf = false;

  constructor() {
    this.pdfUrl = '/assets/pdfs/initialpdf.pdf';
    this.showSecondaryPdf = false;
    this.showPrimaryPdf = true;
  }

  public openPdf() {
    this.showSecondaryPdf = true;
    setTimeout(() => this.showPrimaryPdf = false);
    this.pdfUrl = '/assets/pdfs/Tervemaailma.pdf';
  }

  public openAnotherPdf() {
    this.showPrimaryPdf = false;
    setTimeout(() => this.showSecondaryPdf = true);

    this.pdfUrl = '/assets/pdfs/Secondpdf.pdf';
  }
}
