import { Component } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-time-table',
  imports: [],
  templateUrl: './time-table.html',
  styleUrl: './time-table.scss',
})
export class TimeTable {
  translations: any=[]

  constructor(private langService:LanguageService){
    langService.lang$.subscribe(lang =>{
      this.translations = this.langService.getTranslations(lang);
    })
  }


    currentDayInd = 0;
  
  get days() {
  return [
    { key: 'mond', label: this.translations.mond },
    { key: 'tues', label: this.translations.tues },
    { key: 'wedn', label: this.translations.wedn },
    { key: 'thur', label: this.translations.thur },
    { key: 'frid', label: this.translations.frid },
    { key: 'satu', label: this.translations.satu },
    { key: 'sund', label: this.translations.sund },
  ];
};



nextDay() {
  this.currentDayInd =
    (this.currentDayInd + 1) % this.days.length;
}

prevDay() {
  this.currentDayInd =
    (this.currentDayInd - 1 + this.days.length) % this.days.length;
}
}
