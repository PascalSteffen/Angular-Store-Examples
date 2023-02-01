import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth/auth-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { LoginDetailComponent } from './auth/login/features/login-detail/login-detail.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, LoginDetailComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
    };
  }
}
