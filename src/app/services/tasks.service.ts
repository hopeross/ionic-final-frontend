import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Tasks } from '../models/tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  baseURL: string = "https://localhost:7172/api"

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(`${this.baseURL}/tasks`);
  }

  createTask(newTask: Tasks) {
    return this.http.post(`${this.baseURL}/tasks`, newTask);
  }

  getTask(taskId: number) {
    return this.http.get<Tasks>(`${this.baseURL}/${taskId}`);
  }

  updateTask(updatedTask: Tasks) {
    return this.http.put(`${this.baseURL}/tasks/${updatedTask.taskId}`, updatedTask);
  }

  deleteTask(taskId: number) {
    return this.http.delete<any>(`${this.baseURL}/tasks/${taskId}`);
  }
}