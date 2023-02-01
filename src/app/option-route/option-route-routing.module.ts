import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionRouteComponent } from './option-route/option-route.component';

const routes: Routes = [
  {
    path: '',
    component: OptionRouteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionRouteRoutingModule {}
