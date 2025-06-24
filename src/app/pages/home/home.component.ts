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

  // Add this below your existing properties
  categories = [
    { label: 'Dogs',        image: 'assets/home/dog.jpeg',    link: '/dogs',        color: '#FF9800' },
    { label: 'Cats',        image: 'assets/home/dog.jpeg',    link: '/cats',        color: '#E91E63' },
    { label: 'Small Pets',  image: 'assets/home/dog.jpeg',    link: '/small-pets',  color: '#00BCD4' },
    { label: 'Birds',       image: 'assets/home/dog.jpeg',    link: '/birds',       color: '#8BC34A' },
    { label: 'Vet Consultation', image: 'assets/home/dog.jpeg', link: '/vet',       color: '#7C4DFF' },
    { label: 'Blog',        image: 'assets/home/dog.jpeg',    link: '/blog',        color: '#009688' },
    // { label: 'Experience Centers', image: 'assets/home/dog.jpeg', link: '/experience-centers', color: '#FF7043' }
  ];

  featuredProducts = [
    { name: 'Premium Dog Food', image: 'assets/home/dog.jpeg', price: '₹799', link: '/products/1' },
    { name: 'Cat Scratching Post', image: 'assets/home/dog.jpeg', price: '₹499', link: '/products/2' },
    { name: 'Bird Cage', image: 'assets/home/dog.jpeg', price: '₹1,299', link: '/products/3' },
  ];

  specialOffers = [
    { title: 'Summer Sale: Up to 30% Off!', description: 'On select pet foods and accessories.', link: '/offers' },
    { title: 'Buy 1 Get 1 Free', description: 'On all dog toys. Limited time only!', link: '/offers' },
  ];

  testimonials = [
    { name: 'Amit S.', review: 'Great quality and fast delivery! My dog loves the food.', image: 'assets/home/dog.jpeg' },
    { name: 'Priya K.', review: 'Excellent customer service and unique products.', image: 'assets/home/dog.jpeg' },
  ];

  blogPosts = [
    { title: '5 Tips for New Pet Owners', image: 'assets/home/dog.jpeg', link: '/blog/5-tips' },
    { title: 'How to Choose the Right Food', image: 'assets/home/dog.jpeg', link: '/blog/choose-food' },
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
    this.currentSlide = (this.currentSlide + 1) % 2; // 2 is the total number of slides
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + 2) % 2; // 2 is the total number of slides
  }

  setCurrentSlide(index: number) {
    this.currentSlide = index;
  }

  ngOnDestroy() {
    this.stopSlider();
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => Aos.refresh(), 100);
    }
  }
}
