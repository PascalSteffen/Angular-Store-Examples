import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LightweightComponent } from './lightweight/lightweight.component';

const routes: Routes = [
  {
    path: '',
    component: LightweightComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LightweightRoutingModule {}
