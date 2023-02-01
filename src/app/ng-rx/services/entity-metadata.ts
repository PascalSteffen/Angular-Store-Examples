import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { sortTodosForNgRx } from 'src/app/shared/utils/utilts';

const entityMetadata: EntityMetadataMap = {
  Todo: {
    entityDispatcherOptions: {
      optimisticUpdate: true,
    },
    sortComparer: sortTodosForNgRx,
  },
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
};
