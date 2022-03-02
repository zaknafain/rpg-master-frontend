import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'rpgm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lightMode = false;
  title = 'RPGMaster';

  constructor(private renderer: Renderer2) {
    this.renderer.removeClass(document.body, 'rpgm-light-theme');
  }

  setTheme(lightMode: boolean) {
    this.lightMode = lightMode;
    if (lightMode) {
      this.renderer.addClass(document.body, 'rpgm-light-theme');
    } else {
      this.renderer.removeClass(document.body, 'rpgm-light-theme');
    }
  }

}
