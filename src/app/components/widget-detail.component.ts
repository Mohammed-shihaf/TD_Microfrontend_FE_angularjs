import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Widget } from '../lib/widgets';

@Component({
  selector: 'app-widget-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="widget; else empty">
      <h3>{{ widget.label }}</h3>
      <p>id: {{ widget.id }}</p>
    </div>
    <ng-template #empty><p>Select a widget to see details.</p></ng-template>
  `,
})
export class WidgetDetailComponent {
  @Input() widget: Widget | undefined;
}
