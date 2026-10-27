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
import { PlantillafuncionsimpleComponent } from './components/plantillafuncionsimple-component/plantillafuncionsimple-component';
import { ServicePlantillas } from './service/service.plantillas';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    ComicsComponent,
    PersonaComponent,
    MenuComponent,
    CochesComponent,
    PlantillafuncionsimpleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    ServiceComics,
    ServicePersonas,
    ServiceCoches,
    ServicePlantillas,
  ],
  bootstrap: [App],
})
export class AppModule {}
