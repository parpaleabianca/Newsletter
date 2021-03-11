import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Output() onLanguageChange:EventEmitter<string>= new EventEmitter<string>();
  selectedLanguage="en"
  
  constructor() { }

  //TODO: redirect to social media accounts


  onLanguageChangeEvent(): void {
    this.onLanguageChange.emit(this.selectedLanguage);
  }
}
