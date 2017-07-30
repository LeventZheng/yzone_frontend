
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightboxModule } from './../shared/theme/component/lightbox/lightbox';
import { GalleriaModule } from './../shared/theme/component/galleria/galleria';
import { PaginatorModule } from './../shared/theme/component/paginator/paginator';
import { CarouselModule } from './theme/component/carousel/carousel';

@NgModule({
  imports: [
    LightboxModule,
    PaginatorModule,
    GalleriaModule,
    CarouselModule,
  ],
  declarations: [
    
  ],
  exports: [
    LightboxModule,
    PaginatorModule,
    GalleriaModule,
    CarouselModule
  ]
})
export class SharedModule { }
