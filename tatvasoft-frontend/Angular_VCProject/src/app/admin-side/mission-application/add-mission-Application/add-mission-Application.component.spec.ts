import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMissionApplicationComponent } from './add-mission-Application.component';

describe('AddMissionApplicationComponent', () => {
  let component: AddMissionApplicationComponent;
  let fixture: ComponentFixture<AddMissionApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMissionApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMissionApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
