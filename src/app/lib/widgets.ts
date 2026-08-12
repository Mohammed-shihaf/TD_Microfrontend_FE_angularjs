export interface Widget {
  id: number;
  label: string;
}

export function classifyWidgetCount(count: number): string {
  if (count <= 0) return 'empty';
  if (count < 5) return 'small';
  if (count < 20) return 'medium';
  return 'large';
}

export function sortWidgetsByLabel(widgets: Widget[]): Widget[] {
  return [...widgets].sort((a, b) => a.label.localeCompare(b.label));
}

export function findWidgetById(widgets: Widget[], id: number | null): Widget | undefined {
  return widgets.find((w) => w.id === id);
}
