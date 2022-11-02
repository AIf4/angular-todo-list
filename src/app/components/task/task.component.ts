import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Task {
  status: boolean,
  describe: string
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  inputTask: string = "";
  constructor(
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  addTask(f: NgForm){
    if(!f.value.inputTask) return;
    this.tasks.push({
      status: false,
      describe: f.value.inputTask
    });
    this.inputTask = "";
    this._snackBar.open("Task save", "");
  }

  showTaskForStatus(status: string){
    switch (status) {
      case "COMPLETED":
        
        break;
      case "PENDING":
        
        break;

      default:

        break;
    }
  }



}
