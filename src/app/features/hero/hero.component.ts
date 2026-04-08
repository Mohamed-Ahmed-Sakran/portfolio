import {
  Component,
  inject,
  OnInit,
  OnDestroy,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ScrollService } from '../../core/services/scroll.service';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  portfolio = inject(PortfolioService);
  scroll = inject(ScrollService);

  typedText = signal('');
  isDeleting = signal(false);

  private titles: string[] = [];
  private titleIndex = 0;
  private charIndex = 0;
  private timer!: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.titles = this.portfolio.personalInfo.titleAlternatives;
    this.type();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  private type(): void {
    const current = this.titles[this.titleIndex];
    const deleting = this.isDeleting();

    if (!deleting) {
      this.typedText.set(current.substring(0, this.charIndex + 1));
      this.charIndex++;

      if (this.charIndex === current.length) {
        this.isDeleting.set(false);
        this.timer = setTimeout(() => {
          this.isDeleting.set(true);
          this.type();
        }, 2000);
        return;
      }
    } else {
      this.typedText.set(current.substring(0, this.charIndex - 1));
      this.charIndex--;

      if (this.charIndex === 0) {
        this.isDeleting.set(false);
        this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      }
    }

    const speed = deleting ? 60 : 100;
    this.timer = setTimeout(() => this.type(), speed);
  }
}
