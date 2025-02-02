import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { IAuthority } from '../authority.model';

@Component({
  standalone: true,
  selector: 'ika-authority-detail',
  templateUrl: './authority-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class AuthorityDetailComponent {
  @Input() authority: IAuthority | null = null;

  previousState(): void {
    window.history.back();
  }
}
