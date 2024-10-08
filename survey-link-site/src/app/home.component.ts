import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    NgOptimizedImage
  ],
})
export class HomeComponent {
  surveyLink: string = 'https://your-google-form-link-here';
  currentYear: number = new Date().getFullYear();
}
