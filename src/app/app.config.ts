import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ComponentsModule } from './components/components.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
