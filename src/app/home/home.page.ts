import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tasks } from '../models/tasks';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  taskList: Tasks[] = [];
  
  constructor(private tasksService: TasksService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.tasksService.getAllTasks().subscribe(tasks => {
      this.taskList = tasks;
    })
  }
}