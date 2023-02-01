import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { TodoDetailComponent } from './todo-detail.component';

describe('TodoDetailComponent', () => {
  let component: TodoDetailComponent;
  let fixture: ComponentFixture<TodoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoDetailComponent],
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
