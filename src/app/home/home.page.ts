import { Component } from '@angular/core';
import { Tasks } from '../models/tasks';
import { TasksService } from '../services/tasks.service';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  taskList: Tasks[] = [];
  newTask: Tasks = new Tasks(0,"temp",false);
  
  constructor(private tasksService: TasksService, private dialogService: DialogService) {}

  ngOnInit(): void {
    this.tasksService.getAllTasks().subscribe(tasks => {
      this.taskList = tasks;
    })
  }

  addNewTask() {
    this.dialogService.showPrompt('New Task', 'Task Title').subscribe(response => {
      if(response != null){
        this.newTask.title = response;
        this.newTask.completed = false;
        this.tasksService.createTask(this.newTask).subscribe(() => {
          window.location.reload();
        },error => {
          console.log(`Error: ${error}`);
        });
      }
    });
  }

  changeCompleted(editTask: Tasks) {
    if(editTask.completed) {
      editTask.completed = false;
      this.tasksService.updateTask(editTask).subscribe(() => {
        window.location.reload();
      });
    } else {
      editTask.completed = true;
      this.tasksService.updateTask(editTask).subscribe(() => {
        window.location.reload();
      });
    }
  }

  deleteTask(taskId: any) {
    this.tasksService.deleteTask(taskId).subscribe(() => {
      window.location.reload();
    })
  }
}