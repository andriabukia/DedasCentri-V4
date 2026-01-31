import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-header-component',
  imports: [RouterLink],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent implements OnInit {

  translations: any = {};
  currentLang: 'en' | 'geo' = 'en';
  currentFlag = '/images/engflag.webp';

  constructor(private langService: LanguageService) {}

  ngOnInit() {
    this.langService.lang$.subscribe(lang => {
      this.currentLang = lang;
      this.translations = this.langService.getTranslations(lang);

      this.currentFlag =
        lang === 'en'
          ? '/images/engflag.webp'
          : '/images/Georgia.webp';
    });
  }

  
  

  switchLang() {
    this.langService.switchLang();
  }
}
