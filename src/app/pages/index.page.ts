import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { BannerComponent } from '../components/banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  imports: [
    BannerComponent,
    NgOptimizedImage,
  ],
})
export default class HomeComponent {}
