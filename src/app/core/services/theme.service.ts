import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly STORAGE_KEY = 'portfolio-theme';
  private readonly platformId = inject(PLATFORM_ID);

  readonly isDark = signal<boolean>(true);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved !== null) {
        this.isDark.set(saved === 'dark');
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.isDark.set(prefersDark);
      }
    }

    effect(() => {
      const dark = this.isDark();
      if (isPlatformBrowser(this.platformId)) {
        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
        localStorage.setItem(this.STORAGE_KEY, dark ? 'dark' : 'light');
      }
    });
  }

  toggle(): void {
    this.isDark.update(v => !v);
  }
}
