import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-home-page',
  imports: [ RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  translations: any= [];

  constructor(private langService: LanguageService){
    this.langService.lang$.subscribe(lang => {
      this.translations = this.langService.getTranslations(lang);
    })
  }

}
