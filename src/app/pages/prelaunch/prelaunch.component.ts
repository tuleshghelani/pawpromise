import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.prelaunchForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      petName: ['', []],
      petType: ['', [Validators.required]],
      petAge: ['', [Validators.required]],
      productInterest: ['', [Validators.required]],
      agreeToUpdates: [false, [Validators.requiredTrue]]
    });
  }

  onSubmit() {
    if (this.prelaunchForm.valid) {
      console.log(this.prelaunchForm.value);
      // Handle form submission here
    }
  }
}
