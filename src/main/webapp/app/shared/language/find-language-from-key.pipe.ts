import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'findLanguageFromKey',
})
export default class FindLanguageFromKeyPipe implements PipeTransform {
  private languages: { [key: string]: { name: string; rtl?: boolean } } = {
    nl: { name: 'Nederlands' },
    en: { name: 'English' }
  };

  transform(lang: string): string {
    return this.languages[lang].name;
  }
}
