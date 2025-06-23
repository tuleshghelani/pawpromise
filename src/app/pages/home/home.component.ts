import { Component, OnInit, inject, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
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
  currentSlide = 0;
  slides = [
    {
      image: 'assets/home/slider-1.jpg',
      title: 'Welcome to Pawpromise',
      subtitle: 'Your Trusted Partner in Pet Care',
      description: 'Premium pet nutrition and care products for your beloved companions'
    },
    {
      image: 'assets/home/slider-2.jpg',
      title: 'Quality Pet Nutrition',
      subtitle: 'Made with Love and Care',
      description: 'Scientifically formulated products for optimal pet health'
    }
  ];
  
  constructor(
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private title: Title,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.setupSEO();
    this.setupStructuredData();
  }

  private setupSEO() {
    this.title.setTitle('Pawpromise - Premium Pet Nutrition & Care Products | UK');
    this.meta.updateTag({ name: 'description', content: 'Discover premium pet nutrition and care products at Pawpromise. We offer high-quality pet food, treats, and essential products for dogs and cats. Your trusted partner in pet care.' });
    this.meta.updateTag({ name: 'keywords', content: 'pet nutrition, pet care, dog food, cat food, premium pet products, pet supplies UK' });
    this.meta.updateTag({ property: 'og:title', content: 'Pawpromise - Premium Pet Nutrition & Care Products' });
    this.meta.updateTag({ property: 'og:description', content: 'Your trusted partner in premium pet nutrition and care. Discover our range of high-quality pet products.' });
    this.meta.updateTag({ property: 'og:image', content: '/assets/home/slider-1.jpg' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }

  private setupStructuredData() {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Pawpromise',
      description: 'Premium pet nutrition and care products manufacturer',
      url: 'https://pawpromise.co.uk',
      logo: 'https://pawpromise.co.uk/assets/logo/logo.png',
      sameAs: [
        'https://facebook.com/pawpromise',
        'https://twitter.com/pawpromise',
        'https://linkedin.com/company/pawpromise'
      ]
    };

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    this.document.head.appendChild(script);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      Aos.init({
        duration: 1000,
        once: true
      });
      this.startSlideshow();
    }
  }

  private startSlideshow() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  setCurrentSlide(index: number) {
    this.currentSlide = index;
  }

  getSlideLabel(index: number): string {
    return `Go to slide ${index + 1}`;
  }
}

