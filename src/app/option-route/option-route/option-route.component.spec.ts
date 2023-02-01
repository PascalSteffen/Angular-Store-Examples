import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OptionRouteModule } from '../option-route.module';

import { OptionRouteComponent } from './option-route.component';

describe('OptionRouteComponent', () => {
  let component: OptionRouteComponent;
  let fixture: ComponentFixture<OptionRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionRouteComponent],
      imports: [OptionRouteModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(OptionRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
