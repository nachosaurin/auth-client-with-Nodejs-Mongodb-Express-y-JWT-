import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.css']
})
export class PrivateTasksComponent {

  tasks = [];
  constructor(private tasksService: TasksService){}

  ngOnInit(){
    this.tasksService.getPrivateTasks()
    .subscribe(
      res =>{
        console.log(res)
        this.tasks = res;
      } ,
      err => {
        console.log (err)
      }
    )
  }
}
