import { Component, inject } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import dayjs from 'dayjs/esm';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import locale from '@angular/common/locales/nl';

import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { fontAwesomeIcons } from './config/font-awesome-icons';
import MainComponent from './layouts/main/main.component';

@Component({
  selector: 'ika-app',
  standalone: true,
  template: '<ika-main></ika-main>',
  imports: [
    MainComponent
  ],
})
export default class AppComponent {
  private applicationConfigService = inject(ApplicationConfigService);
  private iconLibrary = inject(FaIconLibrary);
  private dpConfig = inject(NgbDatepickerConfig);

  constructor() {
    this.applicationConfigService.setEndpointPrefix(SERVER_API_URL);
    registerLocaleData(locale);
    this.iconLibrary.addIcons(...fontAwesomeIcons);
    this.dpConfig.minDate = { year: dayjs().subtract(100, 'year').year(), month: 1, day: 1 };
  }
}
