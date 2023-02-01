import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionRouteRoutingModule } from './option-route-routing.module';
import { OptionRouteComponent } from './option-route/option-route.component';
import { SharedModule } from '../shared/shared.module';
import { RedirectButtonComponent } from './option-route/features/redirect-button/redirect-button.component';

@NgModule({
  declarations: [OptionRouteComponent, RedirectButtonComponent],
  imports: [CommonModule, OptionRouteRoutingModule, SharedModule],
})
export class OptionRouteModule {}
