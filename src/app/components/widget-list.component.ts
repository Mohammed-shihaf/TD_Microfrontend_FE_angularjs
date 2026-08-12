import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sortWidgetsByLabel, Widget } from '../lib/widgets';

@Component({
  selector: 'app-widget-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let w of sorted()">
        <button (click)="select.emit(w.id)" [attr.aria-pressed]="w.id === selectedId">{{ w.label }}</button>
      </li>
    </ul>
  `,
})
export class WidgetListComponent {
  @Input() widgets: Widget[] = [];
  @Input() selectedId: number | null = null;
  @Output() select = new EventEmitter<number>();

  sorted(): Widget[] {
    return sortWidgetsByLabel(this.widgets);
  }
}
