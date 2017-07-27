import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './../shared/shared.module';
import { MODULE_ROUTES, MODULE_COMPONENTS } from './dashboard.routes';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
        RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [ MODULE_COMPONENTS ]
})

export class DashboardModule {}
