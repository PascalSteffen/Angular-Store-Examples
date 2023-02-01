import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightweightRoutingModule } from './lightweight-routing.module';
import { LightweightComponent } from './lightweight/lightweight.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LightweightComponent],
  imports: [CommonModule, LightweightRoutingModule, SharedModule],
})
export class LightweightModule {}
