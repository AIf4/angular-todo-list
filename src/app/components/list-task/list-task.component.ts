import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

interface Task {
  id?:number,
  status?: boolean,
  describe: string
}
@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  @Input()
  listOfTask: Task[] = []; 
  taskToEdit: Task = {
    describe:''
  }; 

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  setTaskToEdit( index: number, tasks: Task ){
    this.taskToEdit = {
      id: index,
      describe: tasks.describe
    }
  }

  saveTaskToEdit(index:any, describe: string){
    this.listOfTask[index].describe = describe;
    this._snackBar.open("Task edited", "");
  }

  checkTask( index: number, tasks: Task ){
    this.listOfTask[index].status = tasks.status;
    if(tasks.status){
      this._snackBar.open("Task Complete", "");
    }else{
      this._snackBar.open("Task unmarked", "");
    }
  }

  removeTask(index: number){
    this.listOfTask.splice(index, 1);
    this._snackBar.open("Task delete", "");
  }

  drop(event: CdkDragDrop<Task[]>) {
    moveItemInArray(this.listOfTask, event.previousIndex, event.currentIndex);
  }

}
