import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have the microfrontend remote title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance.title).toEqual('Micro-Frontend Remote (Angular) — standalone');
  });

  it('countLabel reflects the widgets length', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.widgets = [{ id: 1, label: 'A' }];
    expect(fixture.componentInstance.countLabel()).toBe('small');
  });
});
