import { Directive, OnInit, ElementRef, Renderer2, inject, Input } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Directive({
  standalone: true,
  selector: '[ikaActiveMenu]',
})
export default class ActiveMenuDirective implements OnInit {
  @Input() ikaActiveMenu?: string;

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private translateService = inject(TranslateService);

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.updateActiveFlag(event.lang);
    });

    this.updateActiveFlag(this.translateService.currentLang);
  }

  updateActiveFlag(selectedLanguage: string): void {
    if (this.ikaActiveMenu === selectedLanguage) {
      this.renderer.addClass(this.el.nativeElement, 'active');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'active');
    }
  }
}
