import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './components/comics-component/comics-component';
import { PersonaComponent } from './components/persona-component/persona-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { CochesComponent } from './components/coches-component/coches-component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'comics', component: ComicsComponent},
  {path: 'personas', component: PersonaComponent},
  {path: "coches", component: CochesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
