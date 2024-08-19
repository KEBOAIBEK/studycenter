import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../services/teachers.service';
import { TeacherResponse } from '../models/teachers.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss'],
})
export class TeacherListComponent implements OnInit {
  /**\
   * Teachers
   */
  teachers: TeacherResponse[] = [];

  /**
   *
   * @param $teacherService
   */
  constructor(
    private $teacher: TeachersService,
    private $router: Router,
    private $route: ActivatedRoute
  ) {}

  /**
   *
   */
  ngOnInit(): void {
    this.$teacher.getAll().subscribe((result) => {
      this.teachers = result;
    });
  }

  /**
   *
   * @param id
   */
  edit(id: number) {
    this.$router.navigate(['edit', id], { relativeTo: this.$route });
  }

  /**
   *
   * @param id
   */
  delete(id: number) {
    this.$teacher.delete(id).subscribe({
      next: () => {
        // Remove the teacher from the local array
        this.teachers = this.teachers.filter((teacher) => teacher.id !== id);
        this.$teacher
          .getAll()
          .subscribe((teachers) => (this.teachers = teachers));
      },
      error: (error) => {
        console.error('Error deleting teacher:', error);
      },
    });
  }
}
