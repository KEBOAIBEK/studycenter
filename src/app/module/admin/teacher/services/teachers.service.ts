import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeacherRequest, TeacherResponse } from '../models/teachers.model';

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  /**
   * URL for teacher API
   */
  url = 'https://66ab6250636a4840d7ca6eb1.mockapi.io/teacher';

  /**
   *
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   *
   * @returns
   */
  getAll(): Observable<any> {
    return this.http.get(this.url);
  }

  /**
   *
   * @param model
   * @returns
   */
  add(model: TeacherRequest): Observable<any> {
    return this.http.post<TeacherResponse>(this.url, model);
  }

  /**
   *
   * @param model
   * @returns
   */
  edit(model: TeacherRequest, id: number): Observable<any> {
    return this.http.put<TeacherResponse>(`${this.url}/${id}`, model);
  }

  /**
   *
   * @param id
   * @returns
   */
  getById(id: number): Observable<any> {
    return this.http.get<TeacherResponse>(`${this.url}/${id}`);
    //TODO: add id
  }

  /**
   *
   * @param id
   * @returns
   */
  delete(id: number): Observable<any> {
    return this.http.delete<TeacherResponse>(`${this.url}/${id}`);
  }
}
