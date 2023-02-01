import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgRxRoutingModule } from './ng-rx-routing.module';
import { NgrxComponent } from './ngrx/ngrx.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NgrxComponent],
  imports: [CommonModule, NgRxRoutingModule, SharedModule],
})
export class NgRxModule {}
