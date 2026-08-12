import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Widget } from '../lib/widgets';

export interface Remote {
  name: string;
  path: string;
  framework: string;
}

@Injectable({ providedIn: 'root' })
export class WidgetService {
  constructor(private http: HttpClient) {}

  getWidgets(): Observable<{ widgets: Widget[] }> {
    return this.http.get<{ widgets: Widget[] }>('/api/widgets');
  }

  getRemotes(): Observable<{ remotes: Remote[] }> {
    return this.http.get<{ remotes: Remote[] }>('/api/remotes');
  }
}
