import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-back-button',
  template: `
    <div [class]="classes">
      <a href="#" class="text-sm font-semibold leading-7 text-white"><span aria-hidden="true">&larr;</span> Back to home</a>
    </div>
  `,
  standalone: true,
})

export default class BackButtonComponent {
  @Input() classes?: string;
}
