import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
} from '@ngrx/data';
import { entityConfig } from './services/entity-metadata';
import { NgrxComponent } from './ngrx/ngrx.component';
import { TodoDataService } from './services/todo-data.service';
import { TodoEntitiyService } from './services/todo-entity.service';
import { TodoResolver } from './services/todo.resolver';

const routes: Routes = [
  {
    path: '',
    component: NgrxComponent,
    resolve: {
      todos: TodoResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [TodoResolver, TodoEntitiyService, TodoDataService],
})
export class NgRxRoutingModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private todoDataService: TodoDataService
  ) {
    eds.registerMetadataMap(entityConfig.entityMetadata);
    entityDataService.registerService('Todo', todoDataService);
  }
}
