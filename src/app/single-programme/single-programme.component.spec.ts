import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProgrammeComponent } from './single-programme.component';

describe('SingleProgrammeComponent', () => {
  let component: SingleProgrammeComponent;
  let fixture: ComponentFixture<SingleProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProgrammeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
