import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputItemsComponent } from './todo-input-items.component';

describe('TodoInputItemsComponent', () => {
  let component: TodoInputItemsComponent;
  let fixture: ComponentFixture<TodoInputItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoInputItemsComponent]
    });
    fixture = TestBed.createComponent(TodoInputItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
