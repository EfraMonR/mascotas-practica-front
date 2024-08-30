import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ViewerComponent } from './components/viewer/viewer.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'viewer', component: ViewerComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
