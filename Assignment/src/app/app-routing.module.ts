import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';


const routes: Routes = [
  { path: '', redirectTo: 'filimo', pathMatch: 'full' },
  {
    path: 'filimo',
    component: MainComponentComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
