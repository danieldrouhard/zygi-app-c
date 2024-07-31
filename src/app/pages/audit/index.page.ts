import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AuditService } from '../../audit.service';
import BackButtonComponent from '../../components/back-button/back-button.component';
import { LoadingSpinnerComponent } from '../../components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-start-audit',
  standalone: true,
  templateUrl: './start-audit.page.html',
  styleUrls: ['./start-audit.page.scss'],
  imports: [
    NgIf,
    AsyncPipe,
    JsonPipe,
    BackButtonComponent,
    LoadingSpinnerComponent,
  ]
})
export default class StartAuditPageComponent implements OnInit {
  private auditService = inject(AuditService);

  isLoading = this.auditService.isLoading$;

  ngOnInit(): void {
    this.auditService.beginAuditProcess().subscribe(response => {
      if (response) {
        console.log('Audit process started:', response);
      } else {
        console.log('No url found in query params.');
      }
    })
  }

}
