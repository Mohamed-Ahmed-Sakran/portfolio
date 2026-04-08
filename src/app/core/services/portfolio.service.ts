import { Injectable, signal, computed } from '@angular/core';
import {
  Project,
  SkillGroup,
  Stat,
  Language,
  SocialLink,
  NavItem,
} from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  // ── Personal Info ──────────────────────────────────────
  readonly personalInfo = {
    name: 'Mohamed Ahmed Sakran',
    firstName: 'Mohamed',
    title: '.NET Backend Developer',
    titleAlternatives: [
      '.NET Backend Developer',
      'Full-Stack Developer',
      'ASP.NET Core Specialist',
      'Clean Architecture Advocate',
    ],
    email: 'muhmedsakran@gmail.com',
    phone: '+201127223593',
    location: 'Cairo, Egypt',
    github: 'https://github.com/Mohamed-Ahmed-Sakran',
    linkedin: 'https://www.linkedin.com/in/mohamed-ahmed-s-867407249',
    summary: `I'm a passionate .NET Backend Developer who thrives on building scalable, secure, and impactful web applications. From crafting clean RESTful APIs to architecting reliable data layers, I bring both technical precision and creative problem-solving to every project.

Equipped with a strong foundation in Clean Architecture, SOLID principles, and modern .NET technologies, I don't just write code — I build systems that endure. Whether it's integrating Stripe payments, designing JWT authentication flows, or optimizing SQL Server queries, I pursue excellence in every detail.

Currently sharpening my full-stack capabilities through an intensive training program at ITI (Information Technology Institute), I'm actively seeking challenging opportunities where I can contribute to meaningful backend systems within a collaborative, growth-driven team.`,
    cvUrl: '#',
  };

  // ── Navigation ──────────────────────────────────────────
  readonly navItems: NavItem[] = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Internship', href: '#internship' },
    { label: 'Contact', href: '#contact' },
  ];

  // ── Stats ────────────────────────────────────────────────
  readonly stats: Stat[] = [
    { value: 4, suffix: '+', label: 'Years of Study', icon: '🎓' },
    { value: 7, suffix: '+', label: 'Projects Built', icon: '🚀' },
    { value: 10, suffix: '+', label: 'Technologies', icon: '⚙️' },
    { value: 1, suffix: '', label: 'ITI Internship', icon: '🏢' },
  ];

  // ── Skills ───────────────────────────────────────────────
  readonly skillGroups: SkillGroup[] = [
    {
      category: 'Backend',
      icon: '⚡',
      color: '#6366f1',
      skills: [
        { name: 'C#', level: 90 },
        { name: 'ASP.NET Core Web API', level: 88 },
        { name: 'ASP.NET Core MVC', level: 82 },
        { name: 'LINQ', level: 85 },
      ],
    },
    {
      category: 'Database',
      icon: '🗄️',
      color: '#06b6d4',
      skills: [
        { name: 'SQL Server', level: 85 },
        { name: 'Entity Framework Core', level: 85 },
      ],
    },
    {
      category: 'Architecture',
      icon: '🏗️',
      color: '#8b5cf6',
      skills: [
        { name: 'Clean Architecture', level: 80 },
        { name: 'Onion Architecture', level: 85 },
        { name: 'Repository Pattern', level: 85 },
        { name: 'Dependency Injection', level: 88 },
        { name: 'SOLID Principles', level: 82 },
        { name: 'OOP', level: 90 },
      ],
    },
    {
      category: 'Tools',
      icon: '🔧',
      color: '#f59e0b',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'JWT Authentication', level: 88 },
        { name: 'ASP.NET Identity', level: 82 },
        { name: 'Stripe Integration', level: 75 },
        { name: 'AutoMapper', level: 88 },
        { name: 'Swagger', level: 90 },
        { name: 'Postman', level: 88 },
      ],
    },
    {
      category: 'Frontend',
      icon: '🎨',
      color: '#10b981',
      skills: [
        { name: 'Angular', level: 75 },
        { name: 'HTML5', level: 85 },
        { name: 'CSS', level: 80 },
        { name: 'JavaScript', level: 78 },
        { name: 'Bootstrap', level: 80 },
      ],
    },
    {
      category: 'Soft Skills',
      icon: '🤝',
      color: '#ec4899',
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Teamwork', level: 92 },
        { name: 'Communication', level: 85 },
        { name: 'Adaptability', level: 90 },
      ],
    },
  ];

  // ── Projects ─────────────────────────────────────────────
  readonly projects: Project[] = [
    {
      id: 1,
      name: 'E-Commerce API',
      description: 'Enterprise-grade e-commerce backend with Clean Architecture, Stripe payments, and Role-based auth.',
      longDescription: 'A production-ready e-commerce REST API built using Clean Architecture principles. Features include product catalog management, cart & order processing, Stripe payment gateway, JWT-based authentication with role-based authorization, and admin management APIs.',
      technologies: ['ASP.NET Core', 'C#', 'Entity Framework Core', 'SQL Server', 'Clean Architecture', 'Stripe', 'JWT', 'AutoMapper', 'Swagger'],
      features: [
        'Clean Architecture (Domain, Application, Infrastructure, API)',
        'Stripe payment integration',
        'JWT + Role-based authorization',
        'Generic Repository & Unit of Work patterns',
        'Product search, filter & pagination',
        'Order management & tracking',
      ],
      architecture: 'Onion Architecture',
      githubUrl: 'https://github.com/Mohamed-Ahmed-Sakran',
      category: 'api',
      featured: true,
      status: 'completed',
      year: 2026,
    },
    {
      id: 2,
      name: 'GlamConnect',
      description: 'Full-stack beauty booking platform — Angular frontend + .NET API with real-time scheduling.',
      longDescription: 'GlamConnect is a full-stack beauty service booking platform. The Angular frontend interacts with a .NET Core backend API to allow clients to browse services, book appointments, and manage their profiles. Salon owners can manage their services, availability, and view bookings via an admin panel.',
      technologies: ['Angular', 'TypeScript', 'ASP.NET Core', 'C#', 'SQL Server', 'Entity Framework Core', 'JWT', 'Bootstrap'],
      features: [
        'Angular standalone components',
        'Booking & appointment scheduling',
        'Salon owner dashboard',
        'User authentication & profile management',
        'RESTful API integration',
        'Responsive UI with Bootstrap',
      ],
      architecture: 'Full-Stack: Angular SPA + .NET Core REST API',
      githubUrl: 'https://github.com/Mohamed-Ahmed-Sakran',
      category: 'fullstack',
      featured: true,
      status: 'completed',
      year: 2026,
    },
    {
      id: 3,
      name: 'Car Rental Management System',
      description: 'Complete car rental platform with admin panel, vehicle inventory, and booking management.',
      longDescription: 'A comprehensive car rental management system built with ASP.NET Core MVC. Handles vehicle inventory, customer management, rental agreements, pricing rules, and generates reports. Features a full admin dashboard for managing fleet and bookings.',
      technologies: ['ASP.NET Core MVC', 'C#', 'SQL Server', 'Entity Framework Core', 'Bootstrap', 'jQuery', 'LINQ'],
      features: [
        'Vehicle inventory & availability management',
        'Customer registration & profile management',
        'Rental booking & agreement system',
        'Pricing rules & discount management',
        'Admin dashboard with reporting',
        'Search & filter vehicles by type/date',
      ],
      architecture: '3-tier Architecture',
      githubUrl: 'https://github.com/Mohamed-Ahmed-Sakran',
      category: 'fullstack',
      featured: true,
      status: 'completed',
      year: 2026,
    },
    {
      id: 4,
      name: 'To-Do List API',
      description: 'Clean RESTful To-Do API with CRUD, user authentication, task categorization and filtering.',
      longDescription: 'A well-structured To-Do REST API that demonstrates clean API design, authentication, and data modeling. Users can create accounts, manage personal to-do lists, categorize tasks, set priorities, and filter by status. Fully documented with Swagger.',
      technologies: ['ASP.NET Core Web API', 'C#', 'Entity Framework Core', 'SQL Server', 'JWT', 'AutoMapper', 'Swagger'],
      features: [
        'User authentication with JWT',
        'Full CRUD for tasks',
        'Task categorization & priority levels',
        'Filter by status / due date',
        'Pagination support',
        'Swagger/OpenAPI documentation',
      ],
      githubUrl: 'https://github.com/Mohamed-Ahmed-Sakran',
      category: 'api',
      featured: false,
      status: 'completed',
      year: 2025,
    },
    {
      id: 5,
      name: 'MAS Book Store',
      description: 'Responsive bookstore UI with Bootstrap, featuring product slider, cart UI, and Arabic RTL design.',
      longDescription: 'MAS Book Store is a responsive front-end bookstore project built using HTML, CSS, and Bootstrap. It showcases a modern Arabic RTL design with a dynamic product slider, book cards, and a structured layout for an online bookstore. The project demonstrates strong UI/UX practices, responsive design, and clean layout structuring.',
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
      features: [
        'Responsive design for all screen sizes',
        'Arabic RTL layout support',
        'Product carousel slider',
        'Book cards with pricing and actions',
        'Navbar with search and navigation',
        'Footer with contact and social links',
      ],
      architecture: 'Frontend UI Project (Static)',
      githubUrl: 'https://github.com/Mohamed-Ahmed-Sakran',
      category: 'frontend',
      featured: false,
      status: 'completed',
      year: 2025,
    },
    {
      id: 6,
      name: 'Math Quiz Web Application',
      description: 'Interactive math quiz platform for students with registration and sign-in features.',
      longDescription: 'A web-based math quiz application designed to help students practice and improve their math skills. The platform allows users to register, sign in, and solve randomly generated math questions. It features a user-friendly interface, tracks user progress, and provides instant feedback on answers.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'User registration & sign-in system',
        'Randomly generated math questions',
        'Instant feedback on answers',
        'Score tracking and progress display',
        'Responsive and modern UI',
        'Separation of concerns (HTML, CSS, JS files)'
      ],
      architecture: 'Client-side MVC (separated HTML, CSS, JS)',
      githubUrl: 'https://github.com/Mohamed-Ahmed-Sakran',
      category: 'frontend',
      featured: true,
      status: 'completed',
      year: 2026,
    },
    {
      id: 7,
      name: 'Library Management System',
      description: 'Console-based library management tool with author, book, and borrower management backed by Entity Framework Core.',
      longDescription: 'A console application built with .NET 8 and C# 12 that manages authors, books, borrowers, and borrowed-book records. Uses an AppDbContext (Entity Framework Core) for persistence and exposes CRUD operations for Authors and Books, borrower registration, borrow/return workflows, and simple interactive scripts for user-driven scenarios. Designed for small libraries or as a learning project demonstrating EF Core, migrations, and domain-centric data models.',
      technologies: ['.NET 8', 'C# 12', 'Entity Framework Core', 'SQL Server', 'LINQ', 'Console'],
      features: [
        'Author CRUD (create, read, update, delete)',
        'Book CRUD and association with authors',
        'Borrower registration and profile listing',
        'Borrow and return workflows with BorrowedBook records',
        'Interactive CLI script for author/borrower flows',
        'EF Core migrations and DbContext-based persistence',
        'Seed/sample data helpers and basic validation',
      ],
      architecture: 'Layered Console App (Entities, Data, Program)',
      githubUrl: 'https://github.com/Mohamed-Ahmed-Sakran',
      category: 'console',
      featured: false,
      status: 'completed',
      year: 2026,
    },
  ];

  // ── Languages ────────────────────────────────────────────
  readonly languages: Language[] = [
    { name: 'Arabic', level: 'Native', percentage: 100, flag: '🇪🇬' },
    { name: 'English', level: 'Intermediate', percentage: 65, flag: '🇬🇧' },
  ];

  // ── Social Links ─────────────────────────────────────────
  readonly socialLinks: SocialLink[] = [
    {
      platform: 'GitHub',
      url: 'https://github.com/Mohamed-Ahmed-Sakran',
      icon: 'github',
      username: 'Mohamed-Ahmed-Sakran',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mohamed-ahmed-s-867407249',
      icon: 'linkedin',
      username: 'Mohamed Ahmed Sakran',
    },
    {
      platform: 'Email',
      url: 'mailto:muhmedsakran@gmail.com',
      icon: 'email',
      username: 'muhmedsakran@gmail.com',
    },
  ];

  // ── Signals ──────────────────────────────────────────────
  readonly activeFilter = signal<string>('all');
  readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') return this.projects;
    return this.projects.filter((p) => (p.category as string) === filter);
  });

  setFilter(category: string): void {
    this.activeFilter.set(category);
  }
}
