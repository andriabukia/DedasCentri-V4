import { Component } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-members-page',
  imports: [],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage {
  translations: any=[]

  constructor(private langService:LanguageService){
    this.langService.lang$.subscribe(lang => {
      this.translations = this.langService.getTranslations(lang);
    })
  }
}
