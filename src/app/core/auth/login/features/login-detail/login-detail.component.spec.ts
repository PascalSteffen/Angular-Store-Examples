import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';

import { LoginDetailComponent } from './login-detail.component';

describe('LoginDetailComponent', () => {
  let component: LoginDetailComponent;
  let fixture: ComponentFixture<LoginDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginDetailComponent],
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot(),
        SharedModule,
        NoopAnimationsModule,
      ],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
