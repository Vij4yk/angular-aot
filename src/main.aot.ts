import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../build/src/app/index.ngfactory';


enableProdMode();

document.addEventListener('DOMContentLoaded', () => {
  platformBrowser()
    .bootstrapModuleFactory(AppModuleNgFactory)
    .catch(error => console.error(error));
});
