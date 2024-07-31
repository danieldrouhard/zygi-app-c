import { Component } from '@angular/core';
import BackButtonComponent from '../../components/back-button/back-button.component';


@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.page.html',
  styleUrls: ['about.page.scss'],
  imports: [
    BackButtonComponent
  ]
})

export default class AboutPageComponent {}
