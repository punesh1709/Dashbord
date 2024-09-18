import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes.1';


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
