import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutUsComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit(): void {
    // Set SEO meta tags
    this.title.setTitle('Our Mission & Vision - About Paw Promise');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Discover the heart of Paw Promise. Learn about our mission, vision, and core values dedicated to providing premium pet nutrition, and see why we\'re building a community of pet lovers committed to health and happiness.'
    });
    this.meta.updateTag({ 
      name: 'keywords', 
      content: 'pet food, premium pet nutrition, pet care, natural pet food, honest pet food, pet health, pet wellness, company mission, company vision, pet food values'
    });
    
    // Open Graph tags for social sharing
    this.meta.updateTag({ property: 'og:title', content: 'Our Mission & Vision - About Paw Promise' });
    this.meta.updateTag({ property: 'og:description', content: 'Discover the heart of Paw Promise. Learn about our mission, vision, and core values dedicated to providing premium pet nutrition.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://pawpromise.com/about-us' });
    
    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Our Mission & Vision - About Paw Promise' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Discover the heart of Paw Promise. Learn about our mission, vision, and core values dedicated to providing premium pet nutrition.' });
  }
}
