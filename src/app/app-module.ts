import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceComics } from './service/service.comics';
import { ComicsComponent } from './components/comics-component/comics-component';
import { provideHttpClient } from '@angular/common/http';
import { PersonaComponent } from './components/persona-component/persona-component';
import { ServicePersonas } from './service/service.personas';
import { MenuComponent } from './components/menu-component/menu-component';

@NgModule({
  declarations: [App, ComicsComponent, PersonaComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    ServiceComics,
    ServicePersonas,
  ],
  bootstrap: [App],
})
export class AppModule {}
