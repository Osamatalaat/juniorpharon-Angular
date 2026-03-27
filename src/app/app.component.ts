import { Component, OnInit, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    SharedModule
  ]
})
export class AppComponent implements OnInit {
  title = 'juniorpharon-frontend';

  constructor(
    private translate: TranslateService,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|ar/) ? browserLang : 'en');
  }

  ngOnInit() {
    // نفذ الكود ده بس لو في browser
    if (isPlatformBrowser(this.platformId)) {
      this.translate.onLangChange.subscribe(event => {
        const lang = event.lang;

        if (lang === 'ar') {
          this.renderer.setAttribute(document.body, 'dir', 'rtl');
          this.renderer.setAttribute(document.body, 'lang', 'ar');
        } else {
          this.renderer.setAttribute(document.body, 'dir', 'ltr');
          this.renderer.setAttribute(document.body, 'lang', 'en');
        }
      });
    }
  }
}
