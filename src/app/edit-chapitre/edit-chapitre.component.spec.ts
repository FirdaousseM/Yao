import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChapitreComponent } from './edit-chapitre.component';

describe('EditChapitreComponent', () => {
  let component: EditChapitreComponent;
  let fixture: ComponentFixture<EditChapitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditChapitreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChapitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
