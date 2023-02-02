import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LightweightModule } from '../lightweight.module';
import { LightweightComponent } from './lightweight.component';

describe('LightweightComponent', () => {
  let component: LightweightComponent;
  let fixture: ComponentFixture<LightweightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, LightweightModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LightweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
