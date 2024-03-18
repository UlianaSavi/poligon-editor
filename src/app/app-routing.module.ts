import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';

enum Paths {
  emplty = '',
  deploy = 'poligon-editor',
  main = 'poligon-editor',
}

const routes: Routes = [
  { path: Paths.emplty, redirectTo: Paths.main, pathMatch: 'full' },
  { path: Paths.deploy, component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
