import { Component } from '@angular/core';
import BackButtonComponent from '../components/back-button/back-button.component';

@Component({
  selector: 'app-page-not-found',
  template:
    `
    <main class="relative isolate min-h-full">
      <img src="/src/app/assets/images/purple-gradient.jpg" alt="Purple Gradient Background" class="absolute inset-0 -z-10 h-screen w-full object-cover object-top">
      <div class="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <p class="text-base font-semibold leading-8 text-white">404</p>
          <h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
        <p class="mt-4 text-base text-white/70 sm:mt-6">Sorry, we couldn’t find the page you’re looking for.</p>
        <app-back-button></app-back-button>
      </div>
    </main>
`,
  standalone: true,
  imports: [
    BackButtonComponent,
  ],
})

export default class PageNotFoundPageComponent {}
