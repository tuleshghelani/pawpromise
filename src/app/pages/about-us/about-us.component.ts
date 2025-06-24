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
    this.title.setTitle('About Us - Paw Promise | Premium Pet Nutrition & Care');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Learn about Paw Promise\'s commitment to premium pet nutrition and care. We create honest, nutritious pet food with love at its core.'
    });
    this.meta.updateTag({ 
      name: 'keywords', 
      content: 'pet food, premium pet nutrition, pet care, natural pet food, honest pet food, pet health'
    });
    
    // Open Graph tags for social sharing
    this.meta.updateTag({ property: 'og:title', content: 'About Paw Promise - Premium Pet Nutrition & Care' });
    this.meta.updateTag({ property: 'og:description', content: 'Discover how Paw Promise is revolutionizing pet nutrition with honest, premium quality pet food made with love.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://pawpromise.com/about-us' });
    
    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'About Paw Promise - Premium Pet Nutrition & Care' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Discover how Paw Promise is revolutionizing pet nutrition with honest, premium quality pet food made with love.' });
  }
}
