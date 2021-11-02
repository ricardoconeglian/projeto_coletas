import { ColetaCreateComponent } from './components/coleta/coleta-create/coleta-create.component';
import { ColetaCrudComponent } from './views/coleta-crud/coleta-crud.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component'

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "coletas",
    component: ColetaCrudComponent
  },
  {
    path: "coletas/create",
    component: ColetaCreateComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
