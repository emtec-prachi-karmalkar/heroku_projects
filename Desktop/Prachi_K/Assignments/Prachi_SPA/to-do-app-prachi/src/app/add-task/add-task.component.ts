import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit 
{
  new_task="";
  todo_list:any[]=[];
  // doing: any[] = [];
  // done:  any[] = [];
  val=[];

  constructor() {   }

  ngOnInit() {  }

  add_task= function()
  {
    if(localStorage.getItem('todo_list')===null)
    {
      localStorage.setItem("todo_list",JSON.stringify([]));
      this.val=JSON.parse(window.localStorage.getItem('todo_list'));
     // this.todo_list=this.val;
    }

    if(this.new_task !="")
    {
      this.todo_list.push(this.new_task);
      this.new_task="";
      localStorage.setItem('todo_list',JSON.stringify(this.todo_list));   
    }
  }  
}
