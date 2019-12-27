import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AddTaskComponent } from '../add-task/add-task.component';


@Component({
  selector: 'app-view-lists',
  templateUrl: './view-lists.component.html',
  styleUrls: ['./view-lists.component.css']
})
export class ViewListsComponent implements OnInit {

  todo=[];
  doing=[];
  done=[];

   constructor() {
     
  
  }

  ngOnInit() {
   
    if(localStorage.getItem("done_list")===null){
      localStorage.setItem("done_list",JSON.stringify([]));
      this.done = JSON.parse(window.localStorage.getItem('done_list'));
    }else{
      this.done = JSON.parse(window.localStorage.getItem('done_list'));
    }
    if(localStorage.getItem("todo_list")===null){
      localStorage.setItem("todo_list",JSON.stringify([]));
      this.todo = JSON.parse(window.localStorage.getItem('todo_list'));  
    }else{
    this.todo = JSON.parse(window.localStorage.getItem('todo_list'));
    }  
  }

  ondrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      localStorage.setItem('todo_list', JSON.stringify(event.previousContainer.data));
      localStorage.setItem('done_list', JSON.stringify(event.container.data));
    }

  }
  removeItem = function (index) {
    this.todo.splice(index, 1);
    localStorage.setItem('todo_list', JSON.stringify(this.todo));
  }

}
