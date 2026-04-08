import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';
import { Project, ProjectCategory } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  portfolio = inject(PortfolioService);

  expandedId = signal<number | null>(null);

  filters = [
    { label: 'All', value: 'all', icon: '🌐' },
    { label: 'Full Stack', value: 'fullstack', icon: '🔷' },
    { label: 'API', value: 'api', icon: '🔗' },
    { label: 'Frontend', value: 'frontend', icon: '🎨' },
    { label: 'Console', value: 'console', icon: '💻' },
  ];

  countFor(value: string): number {
    if (value === 'all') return this.portfolio.projects.length;
    return this.portfolio.projects.filter((p) => p.category === value).length;
  }

  getCategoryIcon(cat: ProjectCategory): string {
    const icons: Record<string, string> = {
      fullstack: '🔷',
      api: '🔗',
      frontend: '🎨',
      console: '💻',
      all: '🌐',
    };
    return icons[cat] ?? '💻';
  }

  toggleExpand(id: number): void {
    this.expandedId.update((v) => (v === id ? null : id));
  }
}
