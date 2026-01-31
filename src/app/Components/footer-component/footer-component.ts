import { Component } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-footer-component',
  imports: [],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.scss',
})
export class FooterComponent {
    translations: any= [];
  
    constructor(private langService: LanguageService){
      this.langService.lang$.subscribe(lang => {
        this.translations = this.langService.getTranslations(lang);
      })
    }
}
