import {$, browser, ElementFinder} from 'protractor';

export class AppPage {
  public title: ElementFinder;

  constructor() {
    this.title = $('app-root h1');
  }

  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return this.title.getText();
  }
}
