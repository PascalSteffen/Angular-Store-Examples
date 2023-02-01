import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './core/components/header/header.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './ng-rx/services/entity-metadata';
import { metaReducers, reducers } from './core/reducers';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LightweightModule } from './lightweight/lightweight.module';
import { NgRxModule } from './ng-rx/ng-rx.module';
import { OptionRouteModule } from './option-route/option-route.module';
import { LoadingComponent } from './core/components/loading/loading.component';
import { LoadingService } from './core/service/loading.service';
import { AuthTokenInterceptor } from './core/interceptor/auth-token-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    CoreModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers: metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
    }),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
