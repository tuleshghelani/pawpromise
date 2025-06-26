import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EnquiryService, EnquiryData } from '../../services/enquiry.service';

@Component({
  selector: 'app-prelaunch',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './prelaunch.component.html',
  styleUrl: './prelaunch.component.scss'
})
export class PrelaunchComponent implements OnInit {
  prelaunchForm!: FormGroup;  
  petTypes = ['Dog', 'Cat', 'Other'];
  petAges = [
    'Puppy/Kitten (0-1 year)',
    'Young (1-3 years)',
    'Adult (3-7 years)',
    'Senior (7+ years)'
  ];
  productTypes = [
    'Dry Food',
    'Wet Food',
    'Natural Treats',
    'Toys',
    'Collars / Leads / Harnesses',
    'Beds / Blankets',
    'Supplements'
  ];

  constructor(
    private fb: FormBuilder,
    private enquiryService: EnquiryService
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.prelaunchForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', []],
      petName: ['', []],
      petType: ['', [Validators.required]],
      petAge: ['', [Validators.required]],
      productInterest: ['', [Validators.required]],
      agreeToUpdates: [false, [Validators.requiredTrue]]
    });
  }

  onSubmit() {
    if (this.prelaunchForm.valid) {
      const formData = this.prelaunchForm.value;
      
      const enquiryData: EnquiryData = {
        name: formData.fullName,
        email: formData.email,
        mobilenumber: formData.mobileNumber,
        petName: formData.petName || '',
        typeOfPet: formData.petType,
        petAge: formData.petAge,
        likeToBuy: formData.productInterest
      };

      this.enquiryService.submitEnquiry(enquiryData).subscribe({
        next: (response) => {
          console.log('Enquiry submitted successfully:', response);
          // Handle success - you can show a success message or redirect
          alert('Thank you! Your enquiry has been submitted successfully.');
          this.prelaunchForm.reset();
        },
        error: (error) => {
          console.error('Error submitting enquiry:', error);
          // Handle error - you can show an error message
          alert('Sorry, there was an error submitting your enquiry. Please try again.');
        }
      });
    }
  }
}
