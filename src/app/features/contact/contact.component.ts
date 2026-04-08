import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ScrollAnimateDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  portfolio = inject(PortfolioService);

  submitted = signal(false);
  loading = signal(false);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(5)]],
    message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(500)]],
  });

  private sanitizer = inject(DomSanitizer);

  contactItems = [
    {
      label: 'Email',
      value: 'muhmedsakran@gmail.com',
      href: 'mailto:muhmedsakran@gmail.com',
      external: false,
      iconBg: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      svg: this.sanitizer.bypassSecurityTrustHtml(`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`),
    },
    {
      label: 'Phone',
      value: '+20 112 722 3593',
      href: 'tel:+201127223593',
      external: false,
      iconBg: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
      svg: this.sanitizer.bypassSecurityTrustHtml(`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`),
    },
    {
      label: 'Location',
      value: 'Cairo, Egypt',
      href: 'https://maps.google.com/?q=Cairo,Egypt',
      external: true,
      iconBg: 'linear-gradient(135deg, #10b981, #059669)',
      svg: this.sanitizer.bypassSecurityTrustHtml(`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`),
    },
  ];

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    // Simulate API call
    setTimeout(() => {
      this.loading.set(false);
      this.submitted.set(true);
      this.form.reset();
    }, 1500);
  }
}
