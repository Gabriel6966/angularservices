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
import { CochesComponent } from './components/coches-component/coches-component';
import { ServiceCoches } from './service/service.coches';

@NgModule({
  declarations: [App, ComicsComponent, PersonaComponent, MenuComponent, CochesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    ServiceComics,
    ServicePersonas,
    ServiceCoches
  ],
  bootstrap: [App],
})
export class AppModule {}
