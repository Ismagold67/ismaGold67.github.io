import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-items',
  templateUrl: './todo-input-items.component.html',
  styleUrls: ['./todo-input-items.component.css']
})
export class TodoInputItemsComponent {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = ''

  public submitItemTaskList() {

    this.addItemTaskList = this.addItemTaskList.trim();
    if(this.addItemTaskList)
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = '';
  }

}
