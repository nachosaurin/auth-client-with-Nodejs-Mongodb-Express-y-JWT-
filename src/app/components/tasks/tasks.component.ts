import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks = [];
  constructor(private tasksService: TasksService){}

  ngOnInit (){
    this.tasksService.getTasks()
    .subscribe(
      res => {
        console.log(res)
        this.tasks = res;
      },
      err => console.log(err)
    );
    
  }

}
