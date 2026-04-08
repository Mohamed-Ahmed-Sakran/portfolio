import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { fromEvent } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly platformId = inject(PLATFORM_ID);

  readonly scrollPercent = signal<number>(0);
  readonly activeSection = signal<string>('hero');

  constructor() {
    if (!isPlatformBrowser(this.platformId)) return;

    fromEvent(window, 'scroll')
      .pipe(
        throttleTime(16),
        map(() => this.calculateProgress())
      )
      .subscribe(percent => {
        this.scrollPercent.set(percent);
        this.updateActiveSection();
      });
  }

  private calculateProgress(): number {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
  }

  private updateActiveSection(): void {
    const sections = ['hero', 'about', 'skills', 'projects', 'internship', 'contact'];
    let current = 'hero';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 100) {
        current = id;
      }
    }
    this.activeSection.set(current);
  }

  scrollTo(id: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const target = document.getElementById(id.replace('#', ''));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
