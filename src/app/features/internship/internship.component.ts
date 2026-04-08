import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-internship',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './internship.component.html',
  styleUrl: './internship.component.scss',
})
export class InternshipComponent {
  learningItems = [
    {
      icon: '⚡',
      title: 'Backend Development',
      desc: 'ASP.NET Core APIs, authentication systems, and RESTful architecture patterns.',
    },
    {
      icon: '🗄️',
      title: 'Database Design',
      desc: 'SQL Server, EF Core migrations, query optimization, and data modeling.',
    },
    {
      icon: '🔷',
      title: 'Angular Frontend',
      desc: 'Standalone components, signals, reactive forms, and API integration.',
    },
    {
      icon: '🏗️',
      title: 'Clean Architecture',
      desc: 'Repository pattern, SOLID principles, DI, and production-grade code structure.',
    },
    {
      icon: '🔐',
      title: 'Auth & Security',
      desc: 'JWT authentication, identity management, and role-based authorization.',
    },
    {
      icon: '🚀',
      title: 'Real-World Projects',
      desc: 'End-to-end applications deploying backend + frontend in integrated solutions.',
    },
  ];

  techStack = [
    'C#', 'ASP.NET Core', 'Angular 17+', 'TypeScript', 'SQL Server',
    'Entity Framework Core', 'JWT', 'Clean Architecture', 'Git', 'Swagger',
  ];

  eduHighlights = [
    'Data Structures & Algorithms',
    'Database Systems',
    'Software Engineering',
    'Operating Systems',
    'Object-Oriented Programming',
    'Computer Networks',
    'Web Development',
    'Discrete Mathematics',
  ];
}
