import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface EnquiryData {
  name: string;
  email: string;
  mobilenumber: string;
  petName: string;
  typeOfPet: string;
  petAge: string;
  likeToBuy: string;
}

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  submitEnquiry(enquiryData: EnquiryData): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/enquiries/`, enquiryData);
  }
} 