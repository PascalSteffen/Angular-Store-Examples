import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSerializer } from '@angular/router';
import { AuthReverseGuard } from './core/guards/auth-reverse.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { CustomPreloadingStrategy } from './core/service/custom-preload-strategy';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/options',
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./core/auth/auth-routing.module').then(
        (m) => m.AuthRoutingModule
      ),
    canActivate: [AuthReverseGuard],
    data: {
      preload: true,
    },
  },

  {
    path: 'options',
    loadChildren: () =>
      import('./option-route/option-route-routing.module').then(
        (m) => m.OptionRouteRoutingModule
      ),
    canActivate: [AuthGuard],
    data: {
      preload: false,
    },
  },

  {
    path: 'ng-rx-example',
    loadChildren: () =>
      import('./ng-rx/ng-rx-routing.module').then((m) => m.NgRxRoutingModule),
    canActivate: [AuthGuard],
    data: {
      preload: false,
    },
  },

  {
    path: 'lightweight-example',
    loadChildren: () =>
      import('./lightweight/lightweight-routing.module').then(
        (m) => m.LightweightRoutingModule
      ),
    canActivate: [AuthGuard],
    data: {
      preload: false,
    },
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: CustomPreloadingStrategy,
      malformedUriErrorHandler: (
        error: URIError,
        urlSerializer: UrlSerializer,
        url: string
      ) => urlSerializer.parse('./page-not-found'),
    }),
  ],
  exports: [RouterModule],
  providers: [AuthGuard, AuthReverseGuard, CustomPreloadingStrategy],
})
export class AppRoutingModule {}
