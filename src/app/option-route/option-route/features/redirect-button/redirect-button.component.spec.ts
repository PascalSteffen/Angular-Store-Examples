import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OptionRouteModule } from 'src/app/option-route/option-route.module';

import { RedirectButtonComponent } from './redirect-button.component';

describe('RedirectButtonComponent', () => {
  let component: RedirectButtonComponent;
  let fixture: ComponentFixture<RedirectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedirectButtonComponent],
      imports: [OptionRouteModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RedirectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
