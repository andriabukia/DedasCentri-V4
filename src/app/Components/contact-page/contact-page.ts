import { Component } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-contact-page',
  imports: [],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage {
  translations: any=[];
  constructor(private langService:LanguageService){
    langService.lang$.subscribe(lang =>{
      this.translations = this.langService.getTranslations(lang);
    })
  }
}
