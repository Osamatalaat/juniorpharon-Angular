import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { SharedModule } from './shared/shared.module';
import { routes } from './app.routes';
import { CustomTranslateLoader } from './shared/custom-translate-loader';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideRouter(routes),

    provideClientHydration(withEventReplay()),

    provideHttpClient(withFetch()),

    provideAnimations(),

    importProvidersFrom(SharedModule),

    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: CustomTranslateLoader,
          deps: [HttpClient]
        }
      })
    ),

    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ]
};
