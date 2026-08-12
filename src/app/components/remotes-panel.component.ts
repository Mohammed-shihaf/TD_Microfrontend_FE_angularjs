import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Remote } from '../services/widget.service';

@Component({
  selector: 'app-remotes-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Embeddable remotes</h2>
    <ul>
      <li *ngFor="let r of remotes">{{ r.name }} ({{ r.framework }})</li>
    </ul>
  `,
})
export class RemotesPanelComponent {
  @Input() remotes: Remote[] = [];
}
