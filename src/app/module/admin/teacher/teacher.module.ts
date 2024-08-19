import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { AddEditTeacherComponent } from './add-edit-teacher/add-edit-teacher.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
  declarations: [
    TeacherComponent,
    TeacherListComponent,
    AddEditTeacherComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzIconModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
  ],
})
export class TeacherModule {}
