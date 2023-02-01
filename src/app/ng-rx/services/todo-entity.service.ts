import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Todo } from 'src/app/core/models/todo';

@Injectable()
export class TodoEntitiyService extends EntityCollectionServiceBase<Todo> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Todo', serviceElementsFactory);
  }
}
