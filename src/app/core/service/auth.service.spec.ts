import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { AuthService } from './auth.service';

describe('Auth-Service', () => {
  let authService: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot()],
      providers: [AuthService],
    });

    authService = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should a user log in', () => {
    const testUser = {
      email: 'admin@email.com',
      password: 'admin',
      isAdmin: false,
    };

    authService.login(testUser.email, testUser.password).subscribe((user) => {
      expect(user).toBeTruthy();
    });

    const req = httpTestingController.expectOne('/api/login');

    expect(req.request.method).toEqual('POST');

    req.flush(testUser);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
