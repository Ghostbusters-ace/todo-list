import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';

const dbConfig: DBConfig = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [
    {
      store: 'todos',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'title', keypath: 'title', options: { unique: false } },
        { name: 'createdAt', keypath: 'createdAt', options: { unique: false } },
        { name: 'done', keypath: 'done', options: { unique: false } },
      ],
    },
  ],
};

@NgModule({
  declarations: [],
  imports: [CommonModule, NgxIndexedDBModule.forRoot(dbConfig)],
})
export class SharedModule {}
