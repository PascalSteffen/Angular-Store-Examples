import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environments';

export interface AppState {
  [n: string]: never;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
