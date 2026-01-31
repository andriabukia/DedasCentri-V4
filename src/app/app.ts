import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header-component/header-component';
import { FooterComponent } from './Components/footer-component/footer-component';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Centri');



    translations: any= [];
  
    constructor(private langService: LanguageService){
      this.langService.lang$.subscribe(lang => {
        this.translations = this.langService.getTranslations(lang);
      })
    }



}
