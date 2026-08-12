import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetService, Remote } from './services/widget.service';
import { Widget, classifyWidgetCount, findWidgetById } from './lib/widgets';
import { WidgetListComponent } from './components/widget-list.component';
import { WidgetDetailComponent } from './components/widget-detail.component';
import { RemotesPanelComponent } from './components/remotes-panel.component';

// Micro-Frontend remote (standalone): in the connected TD_Microfrontend
// repo, this build output is embedded live into the React shell via
// <iframe src="/angular-remote/">.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WidgetListComponent, WidgetDetailComponent, RemotesPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Micro-Frontend Remote (Angular) — standalone';
  widgets: Widget[] = [];
  remotes: Remote[] = [];
  selectedId: number | null = null;

  constructor(private widgetService: WidgetService) {}

  ngOnInit(): void {
    this.widgetService.getWidgets().subscribe({
      next: (data) => (this.widgets = data.widgets),
      error: () => {},
    });
    this.widgetService.getRemotes().subscribe({
      next: (data) => (this.remotes = data.remotes),
      error: () => {},
    });
  }

  select(id: number): void {
    this.selectedId = id;
  }

  selectedWidget(): Widget | undefined {
    return findWidgetById(this.widgets, this.selectedId);
  }

  countLabel(): string {
    return classifyWidgetCount(this.widgets.length);
  }
}
