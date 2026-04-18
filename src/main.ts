import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

registerLocaleData(localeFr);

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
