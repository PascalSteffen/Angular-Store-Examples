import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntityDataModule } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';
import { NgRxModule } from '../ng-rx.module';
import { entityConfig } from '../services/entity-metadata';

import { NgrxComponent } from './ngrx.component';

describe('NgrxComponent', () => {
  let component: NgrxComponent;
  let fixture: ComponentFixture<NgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(),
        EntityDataModule.forRoot(entityConfig),
        HttpClientTestingModule,
        NgRxModule,
      ],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(NgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
