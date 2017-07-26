import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightboxModule } from './../shared/theme/component/lightbox/lightbox';
import { GalleriaModule } from './../shared/theme/component/galleria/galleria';
import { PaginatorModule } from './../shared/theme/component/paginator/paginator';

@NgModule({
  imports: [
    LightboxModule,
    PaginatorModule,
    GalleriaModule,
  ],
  declarations: [],
  exports: [
    LightboxModule,
    PaginatorModule,
    GalleriaModule
  ]
})
export class SharedModule { }
