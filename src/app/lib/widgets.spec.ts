import { classifyWidgetCount, sortWidgetsByLabel, findWidgetById, Widget } from './widgets';

describe('classifyWidgetCount', () => {
  it('classifies counts into buckets', () => {
    expect(classifyWidgetCount(0)).toBe('empty');
    expect(classifyWidgetCount(3)).toBe('small');
    expect(classifyWidgetCount(10)).toBe('medium');
    expect(classifyWidgetCount(25)).toBe('large');
  });
});

describe('sortWidgetsByLabel', () => {
  it('sorts without mutating input', () => {
    const input: Widget[] = [{ id: 1, label: 'Gamma' }, { id: 2, label: 'Alpha' }];
    const sorted = sortWidgetsByLabel(input);
    expect(sorted.map((w) => w.label)).toEqual(['Alpha', 'Gamma']);
    expect(input[0].label).toBe('Gamma');
  });
});

describe('findWidgetById', () => {
  it('finds a widget by id', () => {
    const widgets: Widget[] = [{ id: 1, label: 'A' }, { id: 2, label: 'B' }];
    expect(findWidgetById(widgets, 2)?.label).toBe('B');
  });
  it('returns undefined for a missing id', () => {
    expect(findWidgetById([], 99)).toBeUndefined();
  });
});
