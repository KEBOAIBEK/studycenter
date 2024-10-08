import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzLayoutModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzMenuModule,
    HttpClientModule,
  ],
})
export class AdminModule {}
