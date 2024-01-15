import { Component, inject } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { TooltipModule } from 'primeng/tooltip';
import { SsrService } from '../../services/ssr.service';
@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [QRCodeModule, TooltipModule],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.scss',
})

export class CardViewComponent {
  public ssrService = inject(SsrService);
  copyToClipboard() {
    const copyText: HTMLSpanElement = document.querySelector(
      '.ticket_text'
    ) as HTMLSpanElement;
    navigator.clipboard.writeText(copyText.innerText);
    alert('Copied the text: ' + copyText.innerText);
  }
}
