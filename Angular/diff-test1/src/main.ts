import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/posts/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


/*Main trying to execute this line
Start witht AppModule and angule parses all the modules
and components and bootstrap*/
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
