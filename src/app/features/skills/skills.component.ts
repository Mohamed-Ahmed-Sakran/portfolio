import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  portfolio = inject(PortfolioService);

  extraTech = [
    'Redis', 'SignalR', 'Hangfire',
  ];
}
