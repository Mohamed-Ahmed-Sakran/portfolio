import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  scroll = inject(ScrollService);
  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'Home', href: 'hero' },
    { label: 'About', href: 'about' },
    { label: 'Skills', href: 'skills' },
    { label: 'Projects', href: 'projects' },
    { label: 'Internship', href: 'internship' },
    { label: 'Contact', href: 'contact' },
  ];

  coreStack = [
    'C# & ASP.NET Core',
    'Entity Framework Core',
    'SQL Server',
    'Angular 21',
    'Clean Architecture',
    'JWT & Identity',
  ];
}
