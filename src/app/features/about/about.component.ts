import { Component, inject, OnInit, ChangeDetectorRef, NgZone, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  portfolio = inject(PortfolioService);
  cdr = inject(ChangeDetectorRef);
  zone = inject(NgZone);

  animatedStats: Record<string, number> = {};

  paragraphs = [
    `I'm Mohamed Ahmed Sakran, a .NET Backend Developer based in Cairo, Egypt, focused on building secure and scalable backend systems using ASP.NET Core.`,

    `After graduating from Zagazig University, I completed the Intensive Training Program (ITP) at the Information Technology Institute (ITI), where I worked on real-world full-stack projects using .NET and Angular.`,

    `I’m passionate about clean architecture, performance optimization, and writing maintainable code. I’m always learning and aiming to grow into a highly skilled backend engineer.`,
  ];

  values = [
    { icon: '🔥', label: 'Clean Code' },
    { icon: '🏗️', label: 'Solid Architecture' },
    { icon: '🚀', label: 'Performance' },
    { icon: '🔐', label: 'Security First' },
  ];

  ngOnInit(): void {
    // Initialize all stats at 0
    this.portfolio.stats.forEach(s => {
      this.animatedStats[s.label] = 0;
    });

    // Use IntersectionObserver to trigger counter animation
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    setTimeout(() => {
      const el = document.querySelector('.stats-grid');
      if (el) observer.observe(el);
    }, 500);
  }

  private animateCounters(): void {
    this.portfolio.stats.forEach(stat => {
      let start = 0;
      const end = stat.value;
      const duration = 1500;
      const step = Math.ceil(duration / end);

      this.zone.runOutsideAngular(() => {
        const timer = setInterval(() => {
          start++;
          this.animatedStats[stat.label] = start;
          this.cdr.detectChanges();

          if (start >= end) clearInterval(timer);
        }, step);
      });
    });
  }
}
