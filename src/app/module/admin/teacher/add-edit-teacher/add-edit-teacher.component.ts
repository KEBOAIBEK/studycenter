import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeachersService } from '../services/teachers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherResponse } from '../models/teachers.model';

@Component({
  selector: 'app-add-edit-teacher',
  templateUrl: './add-edit-teacher.component.html',
  styleUrls: ['./add-edit-teacher.component.scss'],
})
export class AddEditTeacherComponent {
  /**
   * Form
   */
  form = this._fb.nonNullable.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    address: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    dateOfRegister: ['', Validators.required],
    Phone: ['', Validators.required],
    email: ['', Validators.required],
    telegramUserName: ['', Validators.required],
    specialization: ['', Validators.required],
  });

  /**
   * isAdd
   */
  isAdd = true;

  /**
   * Editing Modal
   */
  editingModal!: TeacherResponse;

  /**
   *
   * @param _fb
   */

  constructor(
    private _fb: FormBuilder,
    private _teacher: TeachersService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    const id = Number(this._route.snapshot.params['id']);
    if (id > 0) {
      this.isAdd = false;
      _teacher.getById(id).subscribe((result) => {
        this.editingModal = result;
        /**
         * editingModal
         */
        this.form.patchValue({
          name: this.editingModal.name,
          description: this.editingModal.description,
          address: this.editingModal.address,
          dateOfBirth: this.editingModal.dateOfBirth,
          dateOfRegister: this.editingModal.dateOfRegister,
          Phone: this.editingModal.Phone,
          email: this.editingModal.email,
          telegramUserName: this.editingModal.telegramUserName,
          specialization: this.editingModal.specialization,
        });
      });
    }
  }

  /**
   *
   * @returns
   */
  submit() {
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }
    const request = this.form.getRawValue();

    if (this.isAdd) {
      this._teacher.add(request).subscribe((result) => {
        if (result) {
          this._router.navigate(['../'], { relativeTo: this._route });
        }
      });
      return;
    }

    this._teacher.edit(request, this.editingModal.id).subscribe((teacher) => {
      if (teacher) {
        this._router.navigate(['../../'], { relativeTo: this._route });
      }
      return;
    });
  }

  /**
   *
   */
  clear() {
    this.form.reset();
  }
}
