// app/app.config.ts
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Ensure the path is correct

export const appConfig = {
  providers: [
    importProvidersFrom(provideRouter(routes)),
    // Other providers or configurations can be added here
  ]
};
