import { Component, inject } from '@angular/core';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { map, share, switchMap } from 'rxjs';
import { AuditService } from '../../audit.service';
import BackButtonComponent from '../../components/back-button/back-button.component';
import { LoadingSpinnerComponent } from '../../components/loading-spinner/loading-spinner.component';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgIf, JsonPipe, LoadingSpinnerComponent, BackButtonComponent, MarkdownComponent],
  templateUrl: 'view-audit.page.html',
  styleUrls: ['view-audit.page.scss'],
})
export default class ViewAuditDetailsPageComponent {
  private readonly route = inject(ActivatedRoute);
  private auditService = inject(AuditService);

  private id$ = this.route.paramMap.pipe(
    map((params) => params.get('id'))
  );

  data$ = this.id$.pipe(
    switchMap((id) => this.auditService.getAudit(id!)),
    share()
  );

}
