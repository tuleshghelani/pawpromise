import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import Aos from 'aos';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  
  sliderImages = [
    'assets/home/slider-1.jpg',
    'assets/home/slider-2.jpg'
  ];
  currentSlide = 0;
  sliderInterval: any;

  // Example sections for the home page
  sections = [
    {
      title: 'Our Mission',
      description: 'Delivering premium, professional, and scalable solutions for your business needs. We combine creativity, technology, and trust to help you succeed.',
      icon: 'verified',
      color: 'primary'
    },
    {
      title: 'Why Choose Us?',
      description: 'Experience, innovation, and a client-first approach. Our team is dedicated to providing robust, high-performance solutions tailored to your goals.',
      icon: 'star',
      color: 'secondary'
    },
    {
      title: 'Get Started',
      description: 'Join our growing list of satisfied clients. Contact us today to discover how we can help your business thrive in a digital world.',
      icon: 'rocket',
      color: 'primary-light'
    }
  ];

  constructor(
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private title: Title
  ) {
    this.setupSEO();
    this.setupStructuredData();
  }

  private setupSEO() {
    // Example SEO setup
    this.title.setTitle('Home | PawPromise');
    this.meta.updateTag({ name: 'description', content: 'Premium, professional, and scalable solutions for your business. Discover our unique approach and get started today.' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }

  private setupStructuredData() {
    // Example structured data (JSON-LD)
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'PawPromise',
      'url': 'https://pawpromise.com',
      'description': 'Premium, professional, and scalable solutions for your business.'
    };
    this.meta.addTag({
      name: 'application/ld+json',
      content: JSON.stringify(jsonLd)
    }, true);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      Aos.init({
        duration: 1000,
        once: true
      });
      this.startSlider();
    }
  }

  startSlider() {
    this.sliderInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopSlider() {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.sliderImages.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.sliderImages.length) % this.sliderImages.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  ngOnDestroy() {
    this.stopSlider();
  }
}
